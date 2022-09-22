import { Component, OnInit } from '@angular/core';
import { Controller } from 'src/app/components/display-mode-controllers/controllerts';
import { Category } from 'src/app/components/search-bar/categoty';
import { Contact } from './contacts-interface';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';


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
    { name: 'Birthday', value: 'birthday' },
  ];
  controllers: Array<Controller> = [
    { icon: 'fa fa-table-list', value: 'table' },
    { icon: 'fa fa-folder', value: 'folder' },
    { icon: 'fa fa-id-card', value: 'cards' },
  ];
  display: string = 'table';
  dataReceived: boolean = false;
  unsubscribeGetAll: Function = () => {};

  constructor(private CS: ContactsService) {}

  onSearch(array: Contact[]) {
    this.contacts = array;
  }

  deleteContact(array: Array<Contact>) {
    this.contactsRowData = array;
    this.contacts = this.contactsRowData;
  }

  onChangeDisplay(display: string) {
    this.display = display;
  }

  ngOnInit() {
    this.CS.getAll((contacts: Contact[], unsubscribeGetAll: Function) => {
      this.contactsRowData = contacts;
      this.contacts = this.contactsRowData;
      this.dataReceived = true;
      this.unsubscribeGetAll = unsubscribeGetAll;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribeGetAll();
  }

}