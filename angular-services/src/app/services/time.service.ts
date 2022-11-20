import { Injectable } from '@angular/core';

// this service for create Date ( can contain all methods about Date or Time)
@Injectable({
  providedIn: 'root',
})
export class TimeService {
  constructor() {}

  getCurrentDate() {
    return new Date();
  }
}
