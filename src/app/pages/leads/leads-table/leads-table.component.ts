import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../../contacts/contacts-page/contacts-interface';
import { ContactsService } from '../../contacts/contacts.service';
import { CustomerService } from '../../customers/customer.service';
import { Customer } from '../../customers/customers-page/customer-interface';

@Component({
  selector: ' leads-table',
  templateUrl: './leads-table.component.html',
  styles: [
  ]
})
export class LeadsTableComponent  {
  @Input() contacts: any = [];
  @Output() onDeleteContact = new EventEmitter();

  contactsRowData: Array<Contact> = [];
  array:any = []
  wishlistContacts: Array<Contact> = []

  constructor(private CS: ContactsService) {}

  changeLeadStatus(e: MouseEvent,id:string,contact:Contact){
    this.contacts = this.CS.collectionRef;

    e.stopPropagation();
    this.CS.editLeadStatus(id,contact,() => this.CS.getAllLeads((contacts: Contact[]) => {
      this.contacts = contacts;
    }))

    }


}