import { Component, OnInit } from '@angular/core';

// Component, OnInit là 1 Interface

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss'],
})
export class LifeCycleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Thời gian
    // - set các thuộc tính đầu vào của directive/component
    // -  chỉ được gọi 1 lần duy nhất, sau khi hook ngOnChanges() được gọi lần đầu tiên
    // Khởi tạo các giá trị
    console.log('NgOnit: run the first');
  }
}
