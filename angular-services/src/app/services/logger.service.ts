import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // anh huong toan cu
})
export class LoggerService {
  constructor() {}

  // version 01
  // log(msg: any) {
  //   console.log(`Log: ${msg}`); // the log show with normal display icon
  // }
  // error(msg: any) {
  //   console.error(`Error: ${msg} `); // the log show with error icon
  // }
  // warn(msg: any) {
  //   console.warn(`Warning: ${msg}`); // the log show with warning icon
  // }

  // version 02
  log(text: string, msg: any) {
    console.log(`Log: ${msg}`); // the log show with normal display icon
    return text;
  }
  error(text: string, msg: any) {
    console.error(`Error: ${msg} `); // the log show with error icon
    return text;
  }
  warn(text: string, msg: any) {
    console.warn(`Warning: ${msg}`); // the log show with warning icon
    return text;
  }
}
