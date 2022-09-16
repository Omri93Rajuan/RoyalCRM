import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/pages/Users/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
    `
      .min-hieght-88 {
        min-height: 88vh;
      }
    `
  ],
})
export class MainComponent implements OnInit {

  user: any;
  constructor(private US: UserService) {}

  ngOnInit(): void {
    this.US.getUserStatus((user: any) => (this.user = user));
  }
}
