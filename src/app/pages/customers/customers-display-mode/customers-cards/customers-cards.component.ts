import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../../customer-interface';

@Component({
  selector: 'customers-cards',
  templateUrl: './customers-cards.component.html',
  styles: [`.card{
    min-width:300px;
  }`
  ]
})
export class CustomersCardsComponent  {

  @Input() customers: Array<Customer> = [];

}
