import { Component,Input} from '@angular/core';

@Component({
  selector: 'nav-link-top',
  templateUrl: './nav-link-top.component.html',
  styles: [
  ]
})
export class NavLinkTopComponent {
  @Input() text:string = ''
  @Input() navClass:string = ''
  @Input() to:string = ''

  constructor() { }


}
