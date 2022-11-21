import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-pipe',
  templateUrl: './angular-pipe.component.html',
  styleUrls: ['./angular-pipe.component.scss'],
})
export class AngularPipeComponent implements OnInit {
  textOuput: string = 'Welcome to Angular';
  birthday = new Date(1988, 9, 4);

  constructor() {}

  ngOnInit(): void {}
}
