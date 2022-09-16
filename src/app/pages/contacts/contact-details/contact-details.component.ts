import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Contact } from '../contacts-interface';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styles: [],
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact | void = undefined;
  constructor(private router: ActivatedRoute, private CS: ContactsService) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id');
     this.CS.getContact(id!, (contact: Contact | void) => {this.contact = contact});
 
    });
  }
}
