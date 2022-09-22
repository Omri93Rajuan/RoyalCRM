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

  constructor(private CS:ContactsService, private routerService:Router) {}


  onSearch(array: Contact[]) {
    this.contacts = array;
  }
  deleteContact(array: Array<Contact>){
    this.contacts = array;
  }
  

    
  
  onChangeDisplay(display: string) {
    this.display = display;
  }

  ngOnInit() {
    this.contacts = this.CS.getAll();
  }
}