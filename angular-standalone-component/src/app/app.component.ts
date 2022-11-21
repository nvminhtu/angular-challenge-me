import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooDirective } from './foo.directive';

@Component({
  selector: 'app-root',
  standalone: true, // setup this component is stand alone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [FooDirective, CommonModule],
})
export class AppComponent {
  bar: boolean = true;
  title = 'angular-standalone-component';
}
