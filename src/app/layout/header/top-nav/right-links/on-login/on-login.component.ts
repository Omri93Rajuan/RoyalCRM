import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/pages/Users/user.service';

@Component({
  selector: 'on-login',
  templateUrl: './on-login.component.html',
  styles: [],
})
export class OnLoginComponent  {
  text: string = '';
  to: string = '';
  constructor(private US: UserService) {}

  logout() {
    this.US.logout();
  }
}
