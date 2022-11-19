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

  constructor() {}

  ngOnInit(): void {}

  incrementCounter(): void {
    this.count++;
  }
}
