import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.scss'],
})
export class ComponentInteractionComponent implements OnInit {
  pageTitle: string = 'This is Component Interaction';
  imgUrl: string = 'https://picsum.photos/200/300';
  // imgUrl: string = ''; // if no image there
  noImageUrl: string = 'https://via.placeholder.com/300';
  count: number = 0;
  name: string = '';
  username: string = '';
  exampleMember: string = 'Peter';

  // getter/ setters
  private _customerName: string = '';

  constructor() {}

  ngOnInit(): void {}

  get customerName(): string {
    return this._customerName;
  }
  set customerName(value: string) {
    this._customerName = value;
    if (value === 'Peter' || value === 'peter') {
      alert('Hello Peter!');
    }
  }

  incrementCounter(): void {
    this.count++;
  }

  greetingOldMember(updatedValue: string): void {
    this.username = updatedValue;

    if (updatedValue === this.exampleMember) {
      alert(`Welcome back ${this.exampleMember}`);
    }
  }
}
