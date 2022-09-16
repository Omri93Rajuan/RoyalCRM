import { Component, Input } from '@angular/core';
import { SideNavLink } from '../link-interface';

@Component({
  selector: 'side-nav-link',
  templateUrl: './side-nav-link.component.html',
  styleUrls: [],
})
export class SideNavLinkComponent {
  @Input() link: SideNavLink = { text: '', icon: '', link: '' };

}
