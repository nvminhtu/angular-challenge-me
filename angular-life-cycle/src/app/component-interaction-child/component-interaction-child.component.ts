import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-interaction-child',
  templateUrl: './component-interaction-child.component.html',
  styleUrls: ['./component-interaction-child.component.scss'],
})
export class ComponentInteractionChildComponent implements OnInit {
  @Input() loggedIn: boolean = false;

  private _customerLoggedIn?: boolean;
  message?: string;

  get customerLoggedIn() {
    return this._customerLoggedIn;
  }

  @Input() // set & @Input()
  set customerLoggedIn(value) {
    this._customerLoggedIn = value;
    if (value === true) {
      this.message = ' Welcome back my love customer';
    } else {
      this.message = 'Please login';
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
