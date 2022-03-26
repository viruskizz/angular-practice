import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GhibliService {
  baseUrl = 'https://ghibliapi.herokuapp.com';

  constructor(private httpClient: HttpClient) { }

  getFilm(): Observable<any> {
    const uri = this.baseUrl + '/films';
    return this.httpClient.get(uri);
  }
}
