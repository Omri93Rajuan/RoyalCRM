import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/pages/Users/user.service';

@Component({
  selector: 'right-links',
  templateUrl: './right-links.component.html',
  styles: [
  ]
})
export class RightLinksComponent implements OnInit {

  user: any;
  constructor(private US: UserService) {}

  ngOnInit(): void {
    this.US.getUserStatus((user: any) => (this.user = user));
  }
}
