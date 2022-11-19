import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = 'Lifecycle Hook';
  public isShowing: boolean = false;
  // public isShowing: boolean = false;
  onToggle = () => {
    this.isShowing = !this.isShowing;
    console.log('Toggle' + this.isShowing);
  };
}
