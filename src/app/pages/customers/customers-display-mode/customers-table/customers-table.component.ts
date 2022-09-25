import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../../customers-page/customer-interface';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'customers-table',
  templateUrl: './customers-table.component.html',
  styles: [
  ]
})
export class CustomersTableComponent  {

  @Input() customers: Customer[] = [];
  @Output() onDeleteCustomer = new EventEmitter();

  constructor(private CS: CustomerService,private router: Router
    ) {}

  
    deleteCustomer(e: MouseEvent, id: string) {
      e.stopPropagation();
      this.CS.delete(id);
      this.CS.getAll((customer: Customer[]) => {
        this.customers = customer;
        this.onDeleteCustomer.emit(customer);
      });
    }

}
