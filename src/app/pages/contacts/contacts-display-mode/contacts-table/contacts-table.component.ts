import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../../contacts-interface';
import { ContactsService } from '../../contacts.service';

@Component({
  selector: 'contacts-table',
  templateUrl: './contacts-table.component.html',
  styles: [
  ]
})
export class ContactsTableComponent{

  @Input() contacts: Contact[] = [];
  @Output() onDeleteContact = new EventEmitter();

  constructor(private CS: ContactsService) {
    this.contacts = CS.getAll();
  }

  deleteContact(e: MouseEvent, id: string) {
    e.stopPropagation();
    this.CS.delete(id);
    this.contacts = this.CS.getAll();
    this.onDeleteContact.emit(this.contacts);
  }
}