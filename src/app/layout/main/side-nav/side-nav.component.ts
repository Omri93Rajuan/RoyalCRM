import { Component } from '@angular/core';
import {SideNavLink } from './link-interface';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styles: [],
})
export class SideNavComponent {
  links: SideNavLink[] = [
    { icon: 'fas fa-users', link: 'customers', text: 'customers' },
    { icon: 'fas fa-address-book', link: 'contacts', text: 'contacts' },
  ];
}
