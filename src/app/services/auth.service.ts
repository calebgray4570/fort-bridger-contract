import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { switchMap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;

  constructor(
    private fireAuth: AngularFireAuth,
    private fireStore: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.fireAuth.authState 
      .pipe(
        switchMap(user => {
          if (user) {
            return this.fireStore.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            return of(null);
          }
        })
      )
  }


  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    provider
    const credential = await this.fireAuth.auth.signInWithPopup(provider).then((res) => console.log(res));
    // return this.updateUserData(credential.user);
  }

  async signOut() {
    await this.fireAuth.auth.signOut();
    return this.router.navigate(['/']);
  }


  private updateUserData({ uid, email }: User) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.fireStore.doc(`users/${uid}`);
    const data = {
      uid,
      email
    };

    return userRef.set(data, {merge: true});
  }
  



}
