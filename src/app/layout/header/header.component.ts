import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit {
  title: string = '';
  subTitle: string = '';
  icon: string = '';

  constructor() {}

  ngOnInit(): void {}
}
