import { Pipe, PipeTransform } from '@angular/core';
// Pipe này còn đang lỗi
@Pipe({ name: 'customAsync' })
export class CustomAsyncPipe implements PipeTransform {
  value: string = '';
  transform(value: Promise<string>): string {
    if (this.value.trim().length != 0) {
      value.then((data) => {
        this.value = data;
      });
    }
    return this.value;
  }
}
