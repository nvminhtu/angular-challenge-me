import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-pipe',
  templateUrl: './angular-pipe.component.html',
  styleUrls: ['./angular-pipe.component.scss'],
})
export class AngularPipeComponent implements OnInit {
  // built-in Angular Pipe
  textOuput: string = 'Welcome to Angular';
  birthday = new Date(1988, 9, 4);

  // reference type Pipe
  filteredName = '';

  names = ['Maria', 'Carlos', 'Jessica', 'Emilia', 'Charlie'];
  newNames = [];

  // file pipe
  file = { name: 'logo.svg', size: 2120109, type: 'image/svg' };

  // default Image URL pipe
  imageUrl: string = '';
  noImageUrl: string = 'https://picsum.photos/200/300';

  constructor() {}

  ngOnInit(): void {}

  addName(newName: any) {
    this.names.push(newName.value);
    newName.value = '';
    // this.newNames = [];
    // this.names = [...this.names, this.newNames]; // use Spread
  }
}
