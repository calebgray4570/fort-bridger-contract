import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content.model';
import { ContentService } from '../services/content.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public contents: Content[];
  public contentForm: FormGroup;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

  constructor(
    private contentService: ContentService,
    private fb: FormBuilder
  ) {}
  ngOnInit() {
    this.contentService.getContents().subscribe(
      (data) => {
        console.log('data: ', data);
        this.contents = data.map(e => {
          console.log('e: ', e.payload.doc.data());
          return {
            uid: e.payload.doc.id,
            contentBody: e.payload.doc.data()['contentBody']
          } as Content
        })
        console.log('this.contents: ', this.contents);

      }
    )
    this.buildForm();
  }

  buildForm() {
    this.contentForm = this.fb.group({
      contentBody: ['', Validators.required]
    })
  }

  formSubmit(){
    this.contentForm.value  
    console.log('this.contentForm.value : ', this.contentForm.value );
    this.contentService.createContent(this.contentForm.value).finally( () => this.contentForm.reset())
  }
    
}
