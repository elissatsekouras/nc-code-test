import { Injectable } from '@angular/core';
import formatDate from '../helpers/format-date.helper';
import timeToDDay from '../helpers/time-to-d-day.helper';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor() {}

  formatDate = formatDate;
  timeToDDay = timeToDDay;
}
