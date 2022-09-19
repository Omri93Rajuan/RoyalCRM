import { Component, Input} from '@angular/core';
import { Contact } from '../../contacts-page/contacts-interface';

@Component({
  selector: 'contacts-folders',
  templateUrl: './contacts-folders.component.html',
  styles: [
  ]
})
export class ContactsFoldersComponent  {
  @Input() contacts: Array<Contact> = [];
}
