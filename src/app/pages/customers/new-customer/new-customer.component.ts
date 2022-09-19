import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer-interface';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'new-customer',
  templateUrl: './new-customer.component.html',
  styles: [
  ]
})
export class NewCustomerComponent {

  constructor(private CS: CustomerService, private router: Router) {}

  onSubmit(customer: Customer) {
    this.CS.add(customer, () => this.router.navigate(['/customers']));
  }
}
