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
    height: '30rem',
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

  public editUid: string;

  constructor(
    private contentService: ContentService,
    private fb: FormBuilder
  ) {}
  ngOnInit() {
    this.contentService.getContents().subscribe(
      (data) => {
        console.log('data: ', data);
        this.contents = data.map(e => {
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

  handleEditMode(content) {
    console.log('content: ', content);
    this.editUid = content.uid;
    this.contentForm.controls.contentBody.setValue(content.contentBody)
  }

  formSubmit(){
    if (this.editUid) {
      const contentObj = {
        uid: this.editUid,
        contentBody: this.contentForm.controls.contentBody.value
      }
      console.log('contentObj: ', contentObj);
      this.contentService.updateContent(contentObj).finally( () => {
        this.contentForm.reset();
        this.editUid = null;
      })
    } else {
      console.log('hit 2')
      this.contentForm.value  
      console.log('this.contentForm.value : ', this.contentForm.value );
    }
    // this.contentService.createContent(this.contentForm.value).finally( () => this.contentForm.reset())
  }
    
}
