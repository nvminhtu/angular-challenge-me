import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnInit {
  @Input() checked: boolean = false;
  @Output() checkedChange = new EventEmitter<boolean>(); // Output tu con -> cha
  @Output() outputFromChild: EventEmitter<string> = new EventEmitter();

  outputText: string = 'Hi Father';

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked); // gui len component cha
    this.outputFromChild.emit(this.outputText); // gui len component cha
  }
}
