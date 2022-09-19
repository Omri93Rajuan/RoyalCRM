import { Component, OnInit } from '@angular/core';
import { Controller } from 'src/app/components/display-mode-controllers/controllerts';
import { Category } from 'src/app/components/search-bar/categoty';
import { Contact } from './contacts-interface';
import { ContactsService } from '../contacts.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: [],
})
export class ContactsComponent implements OnInit{
  contactsRowData: Array<Contact> = [];
  contacts: Array<Contact> = [];
  categories: Array<Category> = [
    { name: 'First Name', value: 'firstName' },
    { name: 'Last name', value: 'lastName' },
    { name: 'Email', value: 'email' },
    { name: 'Phone', value: 'phone' },
    { name: 'notes', value: 'notes' },
  ];
  controllers: Array<Controller> = [
    { icon: 'fa fa-table-list', value: 'table' },
    { icon: 'fa fa-folder', value: 'folder' },
    { icon:"fas fa-id-card-alt", value: 'card' },



  ];
  display: string = 'table';

  constructor(private CS:ContactsService) {}


  onSearch(array: Contact[]) {
    this.contacts = array;
  }
  deleteContact(array: Array<Contact>){
    this.contactsRowData = array;
    this.contacts = this.contactsRowData;
  }
        
  
  onChangeDisplay(display: string) {
    this.display = display;
  }

  ngOnInit() {
    this.contactsRowData = this.CS.getAll();
    this.contacts = this.contactsRowData;
  }
}