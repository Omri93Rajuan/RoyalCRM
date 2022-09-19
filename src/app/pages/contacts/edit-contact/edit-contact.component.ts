import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Contact } from '../contacts-page/contacts-interface';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'edit-contact',
  templateUrl: './edit-contact.component.html',
  styles: [],
})
export class EditContactComponent implements OnInit {
  contact: Contact | void = undefined;
  id: string | null = null;
  birthday: Date | void = undefined;

  constructor(
    private CS: ContactsService,
    private AR: ActivatedRoute,
    private router: Router
  ) {}

  onSubmit(contact: Contact) {
    contact.birthday = this.birthday!;
    contact._id = this.id!;
    this.CS.edit(contact, this.id!, () =>
    this.router.navigate(['/contacts'])
  );

  }

  resetForm() {
    console.log('in reset form father');

    this.CS.getContact(this.id!, ({ ...contact }: Contact) => {
      this.contact = this.contact;
    });
  }

  ngOnInit(): void {
    this.AR.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id');
      this.id = id;

      this.CS.getContact(id!, ({ ...contact }: Contact) => {
        this.contact = contact;
        this.birthday = contact.birthday;
      });
    });
  }
}