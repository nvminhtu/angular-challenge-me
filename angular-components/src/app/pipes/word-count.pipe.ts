import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordCount',
})
export class WordCountPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value.trim().split(/\s+/).length;
    // trim(): remove white space both start & end
    // split(/\s+/): tach chuoi ma phan cach bang khoan trang
  }
}
