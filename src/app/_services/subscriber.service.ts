import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  constructor(private afs: AngularFirestore) { }

  addSubscriber(email: string) {
    return this.afs.doc(`subscribers/${email}`)
      .set({ uid: email }, { merge: true });
  }
}
