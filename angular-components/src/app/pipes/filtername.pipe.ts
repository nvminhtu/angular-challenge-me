import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtername',
  pure: false, // impure pipe
})
export class FilternamePipe implements PipeTransform {
  transform(value: any, filterString: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = []; // init array
    for (const name of value) {
      if (name.toLowerCase() === filterString.toLocaleLowerCase()) {
        resultArray.push(name);
      }
    }
    return resultArray;
  }
}
