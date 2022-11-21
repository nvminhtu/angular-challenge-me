import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize',
})
// file = { name: 'logo.svg',
// size: 2120109, type: 'image/svg' };
export class FilesizePipe implements PipeTransform {
  transform(size: number, extension: string = 'MB'): string {
    return (size / (1024 * 1024)).toFixed(2) + ' ' + extension;
  }
}
