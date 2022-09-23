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
  @Input() contacts: Contact[] = [];
  @Output() onDeleteContact = new EventEmitter();

  constructor(private CS: ContactsService) {}

  changeLeadStatus(e: MouseEvent,id:string,contact:Contact){
    e.stopPropagation();
    this.CS.editLeadStatus(id,contact,() => this.CS.getAll((contacts: Contact[]) => {
      this.contacts = contacts;
    }))

    }
}
