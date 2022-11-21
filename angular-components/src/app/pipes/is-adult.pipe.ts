import { Pipe, PipeTransform } from '@angular/core';

export class User {
  name: string = '';
  age: number = 0;
}

@Pipe({
  name: 'isAdult',
})
export class IsAdultPipe implements PipeTransform {
  transform(arr: User[]): User[] {
    return arr.filter((x) => x.age > 18);
  }
}
