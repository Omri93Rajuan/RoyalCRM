import { Component } from '@angular/core';
import { Link } from './link-interface';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styles: [],
})
export class SideNavComponent {
  links: Array<Link> = [];

  constructor() {
    this.links.push(
      {
        link: '/costumer',
        icon: 'fa-solid fa-democrat',
        text: '  customer',
      },
      {
        link: '/contacts',
        icon: 'fa-solid fa-address-card',
        text: '  contacts',
      }
    );
  }
}
