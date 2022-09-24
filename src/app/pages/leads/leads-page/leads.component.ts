import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/components/search-bar/categoty';
import { Contact } from '../../contacts/contacts-page/contacts-interface';
import { ContactsService } from '../../contacts/contacts.service';
import { Customer } from '../../customers/customers-page/customer-interface';
import { CustomerService } from '../../customers/customer.service';
import { Observable } from '@firebase/util';
import { collection, CollectionReference, DocumentData, Firestore, fromRef } from '@angular/fire/firestore';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: []
})
export class LeadsComponent implements OnInit {

  collectionRef: CollectionReference<DocumentData> = collection(
    this.FS,
    'contacts'
  );


testFilter :  Array<any> = []
  contactsRowData: Array<Contact> = [];
  array:any = []
  wishlistContacts: Array<Contact> = []
  categories: Array<Category> = [
    { name: 'First Name', value: 'firstName' },
    { name: 'Last name', value: 'lastName' },
    { name: 'Email', value: 'email' },
    { name: 'Phone', value: 'phone' },
    { name: 'Notes', value: 'notes' },
  ];


  
  constructor(private CS:ContactsService,private FS: Firestore) { }



  deleteContact(array: Array<Contact>) {
    this.contactsRowData = array;
    this.wishlistContacts = this.contactsRowData;
  }
showLeads(array: Array<Contact>) {
  this.contactsRowData = array;
}
 
  ngOnInit() {

    this.CS.getAllLeads((contacts: Contact[]) => {
      this.contactsRowData = contacts;
      this.wishlistContacts = this.contactsRowData
    },)


    
  }
  
}
