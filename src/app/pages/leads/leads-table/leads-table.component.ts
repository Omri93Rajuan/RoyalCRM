import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../customers/customer.service';
import { Customer } from '../../customers/customers-page/customer-interface';

@Component({
  selector: ' leads-table',
  templateUrl: './leads-table.component.html',
  styles: [
  ]
})
export class LeadsTableComponent  {

  @Input() customers: Customer[] = [];
  @Output() onDeleteCustomer = new EventEmitter();

  constructor(private CS:CustomerService,private router: Router) { }

  deleteCustomer(e: MouseEvent, id: string) {
    e.stopPropagation();
    this.CS.delete(id);
    this.CS.getAll((customers: Customer[]) => {
      this.customers = customers;
      this.onDeleteCustomer.emit(customers);
    });
  }

}
