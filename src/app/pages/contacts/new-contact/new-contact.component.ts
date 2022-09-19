import { formatCurrency } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { CollectionReference, DocumentData } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { collection, Firestore, SnapshotMetadata } from '@firebase/firestore';
import { Contact } from '../contacts-page/contacts-interface';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'new-contact',
  templateUrl: './new-contact.component.html',
  styles: [],
})
export class NewContactComponent{

  constructor(private CS: ContactsService, private routerService: Router) {}

   onSubmit(contact: Contact) {

   this.CS.add(contact, () => this.routerService.navigate(['/contacts']));
  }
    
    

}
