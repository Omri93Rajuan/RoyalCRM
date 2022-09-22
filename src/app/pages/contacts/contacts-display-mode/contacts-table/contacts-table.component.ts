import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';
import { Contact } from '../../contacts-page/contacts-interface';
import { ContactsService } from '../../contacts.service';

@Component({
  selector: 'contacts-table',
  templateUrl: './contacts-table.component.html',
  styles: [
  ]
})
export class ContactsTableComponent implements OnInit{
  status: boolean = false;
  @Input() contacts: Contact[] = [];
  @Input() leads: any[] = [];

  @Output() onDeleteContact = new EventEmitter();
  @Output() onMoveToLeads = new EventEmitter();


  constructor(private CS: ContactsService) {
    this.contacts = CS.getAll();
    
  }

  deleteContact(e: MouseEvent, id: string) {
    e.stopPropagation();
    this.CS.delete(id);
    this.contacts = this.CS.getAll();
    this.onDeleteContact.emit(this.contacts);
  }


  
ngOnInit(){

}
}