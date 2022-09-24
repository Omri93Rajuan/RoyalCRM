import { Injectable } from '@angular/core';

import {
  addDoc,
  collection,
  CollectionReference,
  deleteDoc,
  doc,
  docSnapshots,
  DocumentData,
  Firestore,
  getDoc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from '@angular/fire/firestore';
import { Contact } from './contacts-page/contacts-interface';
import { filter } from 'rxjs'


@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  collectionRef: CollectionReference<DocumentData> = collection(
    this.FS,
    'contacts'
  );
  

  constructor(private FS: Firestore) {}

  getAll(cb: Function) {
    let contacts: any = [];
    const unsubscribeGetAll = onSnapshot(this.collectionRef, (snapShotData) => {
      snapShotData.docs.forEach((contact:any) => {
        contacts.push({
          ...contact.data(),
          _id: contact.id,
        });
      });
    });
    return cb(contacts, unsubscribeGetAll);
  }

  getAllLeads(cb: Function) {
    let contacts: any = [];
    const unsubscribeGetAll = onSnapshot(this.collectionRef, (snapShotData) => {
      snapShotData.docs.forEach((contact) => {
        if(contact.get("lead")){
        {
          contacts.push({
            ...contact.data(),
            _id: contact.id,
          });
        }}
      });
    });
    return cb(contacts, unsubscribeGetAll);
  }

  add(contact: Contact, cb: Function) {
    contact.createdAt = new Date();
    contact.lead = false;
    addDoc(this.collectionRef, contact)
      .then(() => cb())
      .catch((error) => console.log(error));
  }

  async getContact(id: string, cb: Function) {
    try {
      const docRef = doc(this.FS, 'contacts', id);
      const result = await getDoc(docRef);
      const contact = { ...result.data(), _id: result.id };
      cb(contact);
    } catch (error) {
      console.log(error);
    }
  }

  delete(id: string) {
    const docRef = doc(this.FS, 'contacts', id);
    deleteDoc(docRef).catch((error) => console.log(error));
  }

  edit(contact: Contact, id: string, cb: Function) {
    const docRef = doc(this.FS, 'contacts', id);
    updateDoc(docRef, { ...contact })
      .then(() => cb())
      .catch((error) => console.log(error));
  }
  editLeadStatus(id: string, contact: Contact, cb: Function) {
    const docRef = doc(this.FS, 'contacts', id);
    updateDoc(docRef, { lead: !contact.lead })
      .then(() => cb())
      .catch((error) => console.log(error));
  }
  
}
