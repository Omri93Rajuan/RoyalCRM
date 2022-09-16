import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'on-login',
  templateUrl: './on-login.component.html',
  styles: [],
})
export class OnLoginComponent implements OnInit {
  text: string = '';
  to: string = '';
 

  constructor() {}

  ngOnInit(): void {}
}
