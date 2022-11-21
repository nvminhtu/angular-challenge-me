import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralPipe',
})
// Explain for this pipe:
// check input data: number
// - ( if data > 1 is plural)
// - plural is default and has suffix is s/custom
// - if not no 's'/custom in suffix

// how to use:
// | pluralPipe
// | pluralPipe:"es"
export class PluralPipePipe implements PipeTransform {
  transform(input: number, customPluralForm: string = 's'): string {
    return input > 1 ? customPluralForm : '';
  }
}
