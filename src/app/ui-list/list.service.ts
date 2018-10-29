import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:4000';

  getLocations() {
    return this.http.get(`${this.url}/lokasi`);
  }

  getContinents() {
    return this.http.get(`${this.url}/area`);
  }
}
