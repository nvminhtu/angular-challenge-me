import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-interaction-parent',
  templateUrl: './component-interaction-parent.component.html',
  styleUrls: ['./component-interaction-parent.component.scss'],
})
export class ComponentInteractionParentComponent implements OnInit {
  parentTitle: string = 'Parent Component';
  constructor() {}

  ngOnInit(): void {}
}
