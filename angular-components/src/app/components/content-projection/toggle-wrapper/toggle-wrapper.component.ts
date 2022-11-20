import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-wrapper',
  templateUrl: './toggle-wrapper.component.html',
  styleUrls: ['./toggle-wrapper.component.scss'],
})
export class ToggleWrapperComponent implements OnInit {
  check: boolean = false;
  childMessage?: string;

  constructor() {}
  ngOnInit(): void {}

  // hàm get data từ child
  receiveChildData(data: string) {
    // oday phai khai bao kieu du lieu nhe
    this.childMessage = data;
    console.log('Message from child:' + data);
  }
}
