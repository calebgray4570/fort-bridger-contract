import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Content } from '../models/content.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  constructor(
    private firestore: AngularFirestore
  ) {}

  getContents() {
    return this.firestore.collection('content').snapshotChanges();
  }

  createContent(content) {
    return this.firestore.collection('content').add(content);
  }

  updateContent(content) {
    return this.firestore.firestore.doc('content/' + content.uid).update(content);
  }

}
