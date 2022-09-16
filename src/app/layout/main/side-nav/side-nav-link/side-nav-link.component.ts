import { Component, Input } from '@angular/core';

@Component({
  selector: 'side-nav-link',
  templateUrl: './side-nav-link.component.html',
  styleUrls: [],
})
export class SideNavLinkComponent {
  @Input() text: string = '';
  @Input() link: string = '';
  @Input() icon: string = '';
}
