import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../_models/user';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  redirectUrl: string;
  
  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore){
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => user 
        ? this.afs.doc<User>(`users/${user.uid}`).valueChanges() : of(null)));
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.oAuthLogin(provider);
  }

  async login(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then((credential) => this.updateUserData(credential.user));
  }

  async signUp(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((credential) => this.updateUserData(credential.user));
  }

  private async oAuthLogin(provider: any) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => this.updateUserData(credential.user));
  }

  signOut() {
    return this.afAuth.auth.signOut()
  }
 
  private updateUserData(user: firebase.User) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      roles: {
        subscriber: true
      }
    }
    return userRef.set(data, { merge: true })
  }

   ///// Role-based Authorization //////

   canRead(user: User): boolean {
    const allowed = ['admin', 'editor', 'subscriber']
    return this.checkAuthorization(user, allowed)
  }

  canEdit(user: User): boolean {
    const allowed = ['admin', 'editor']
    return this.checkAuthorization(user, allowed)
  }

  canDelete(user: User): boolean {
    const allowed = ['admin']
    return this.checkAuthorization(user, allowed)
  }

  // determines if user has matching role
  private checkAuthorization(user: User, allowedRoles: string[]): boolean {
    if (!user) return false
    for (const role of allowedRoles) {
      if ( user.roles[role] ) {
        return true
      }
    }
    return false
  }

}
