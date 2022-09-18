import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../../customer-interface';

@Component({
  selector: 'customers-folders',
  templateUrl: './customers-folders.component.html',
  styles: [
  ]
})
export class CustomersFoldersComponent {

  @Input() customers: Array<Customer> = [];

}
