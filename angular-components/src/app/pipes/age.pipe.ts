import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
})
// version 01
// export class AgePipe implements PipeTransform {
//   transform(value: Date): any {
//     const currentYear = new Date().getFullYear();
//     // get nam sinh cua Date truyen vao
//     const dobYear = value.getFullYear();
//     const age = currentYear - dobYear;
//     return age + ' years old';
//   }
// }

// version 02: with paremeters
export class AgePipe implements PipeTransform {
  transform(value: Date, capitalized: boolean = false): any {
    const currentYear = new Date().getFullYear();
    const dobYear = value.getFullYear();
    const age = currentYear - dobYear;
    let text = ' years old';

    if (capitalized) {
      text = text.toUpperCase();
    }
    return age + text;
  }
}
