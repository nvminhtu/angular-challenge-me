import { Pipe, PipeTransform } from '@angular/core';

// Description:
// <img [src]="imageUrl | defaultImage: noImageUrl" />
// - display imageUrl |
// - check if imageUrl ready -> show imageUrl
// - check if not imageUrl not ready -> show noImageUrl

@Pipe({
  name: 'defaultImage',
})
export class DefaultImagePipe implements PipeTransform {
  transform(value: string, fallback: string): string {
    let image: string = '';

    // version 01:
    // if (value) {
    //   image = value;
    // } else {
    //   image = fallback; // link default image
    // }
    // return image;

    // version 02:
    value ? (image = value) : (image = fallback);
    return image;
  }
}
