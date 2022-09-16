import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'on-watch',
  templateUrl: './on-watch.component.html',
  styles: [],
})
export class OnWatchComponent implements OnInit {
  text: string = '';
  to: string = '';

  constructor() {}

  ngOnInit(): void {}
}
