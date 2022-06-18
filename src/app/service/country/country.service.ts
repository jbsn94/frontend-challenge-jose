import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Http } from '@capacitor-community/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  list() {
    return Http.post({
      url: `${environment.url}/holidays/Countries`,
      headers: {
        Authorization: `Bearer ${environment.key}`,
        'Content-Type': 'application/json'
      }
    });
  }

}
