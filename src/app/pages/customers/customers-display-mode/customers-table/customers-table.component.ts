import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from '../../customer-interface';
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

  constructor(private CS: CustomerService) {}

  deleteCustomer(e: MouseEvent, id: string) {
    e.stopPropagation();
    this.CS.delete(id);
    this.CS.getAll((customers: Customer[]) => {
      this.customers = customers;
      this.onDeleteCustomer.emit(customers);
    });
  }
}
