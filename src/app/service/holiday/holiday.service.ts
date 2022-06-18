import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Http } from '@capacitor-community/http';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {

  constructor() { }

  list(country_code: string, year: string | number) {
    return Http.post({
      url: `${environment.url}/holidays/List`,
      headers: {
        Authorization: `Bearer ${environment.key}`,
        'Content-Type': 'application/json'
      },
      data: {
        country_code,
        year
      }
    });
  }
}
