import { Component, Input } from '@angular/core';
import { Address } from 'src/app/interfaces/address';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactComponent  {
@Input() firstName:string = ''
@Input() lastName:string = ''
@Input() email:string = ''
@Input() phone:string = ''
@Input() age:number = 0
@Input() address?:Address = this.address




  constructor() { }


}
