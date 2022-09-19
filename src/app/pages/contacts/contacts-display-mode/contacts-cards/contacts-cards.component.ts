import { Component, Input} from '@angular/core';
import { Contact } from '../../contacts-page/contacts-interface';

@Component({
  selector: 'contacts-cards',
  templateUrl: './contacts-cards.component.html',
  styles: [`.card{
    min-width:300px;
  }`
  ]
})
export class ContactsCardsComponent {
  @Input() contacts: Array<Contact> = [];
}
