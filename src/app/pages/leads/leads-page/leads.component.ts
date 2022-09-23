import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/components/search-bar/categoty';
import { Contact } from '../../contacts/contacts-page/contacts-interface';
import { ContactsService } from '../../contacts/contacts.service';
import { Customer } from '../../customers/customers-page/customer-interface';
import { CustomerService } from '../../customers/customer.service';
import { Observable } from '@firebase/util';
import { fromRef } from '@angular/fire/firestore';
import { filter } from 'rxjs';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: []
})
export class LeadsComponent implements OnInit {
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

  constructor(private CS:ContactsService) { }

  deleteLead(array: Array<Contact>){
    this.wishlistContacts = array;
  }
  

  deleteContact(array: Array<Contact>) {
    this.contactsRowData = array;
    this.wishlistContacts = this.contactsRowData;
  }
 
  ngOnInit() {
    // ref.orderByChild("key").equalTo("-LF2eRf1lHI6X3U6C7Yh")

    this.CS.getAll((contacts: Contact[]) => {
      this.contactsRowData = contacts;
      this.wishlistContacts = this.contactsRowData;

      ;
    })


    
  }
  
}
