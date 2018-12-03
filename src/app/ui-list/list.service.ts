import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, ResponData, ResponLang} from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  getUserDetails(email, password) {
    return this.http.post<Login>('/posts/auth/login', {
      email, password
    });
  }

  getLocation(token) {
    return this.http.get<ResponLang>('/posts/getlocation', {
      headers: { token: token }
    });
  }

  getPopularLocations(token, lang){
    return this.http.get<ResponData>('/posts/show-popular-destination', {
      headers: { token: token }, params: { lang : lang}
    });
  }

  getContinents(token) {
     return this.http.get<ResponData>('/posts/show-continent', {
      headers: { token: token}
     });
   }

   getDestinations(token) {
     return this.http.get<ResponData>('/posts/show-destination', {
       headers: { token: token }
     });
   }

   getCountries(token, id){
     return this.http.get<ResponData>('/posts/show-country/'+ id, {
       headers: { token: token }
     });
   }
   
   getLocationsByCountry(token, id){
     return this.http.get<ResponData>('/posts/show-location/' + id, {
       headers: { token: token }
     });
   }

   getLocationsByContinent(token, id){
     return this.http.get<ResponData>('/posts/show-location-by-continent/' + id, {
       headers: { token: token }
     });
   }



  // getLocations() {
  //   return this.http.get(`${this.url}/lokasi`);
  // }

   

  // getLocationsByCode(code: string) {
  //   return this.http.get(`${this.url}/area?code=${code}`);
  // }

  // getLocationsByCode(code: string): Subject<string> {
  //   const dataSub = new Subject<string>();
  //   this.http.get(
  //     `${this.url}/area?code=${code}`)
  //     .subscribe((location: any) => {
  //       dataSub.next(location.country);
  //     });
  //   return dataSub;
  // }
}
