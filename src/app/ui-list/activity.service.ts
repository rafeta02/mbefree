import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponLang, ResponData } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }

  getMenuActivity(token){
    return this.http.get<ResponData>('/posts/show-category-list', {
      headers: { token: token }
    });
  }

  getLocationById(token, id){
    return this.http.get<ResponData>('/posts/show_detail-location/' + id, {
      headers: { token: token },
    })
  }

  getProductByLocation(token, lang, cur, id){
    return this.http.get<ResponData>('/posts/show-product-list/'+ id, {
      headers: { token: token }, params: { lang: lang, currency: cur}
    })
  }

  getProductByLocationPaginate(token, lang, cur, id, page) {
    return this.http.get<ResponData>('/posts/show-product-list/' + id, {
      headers: { token: token }, params: { lang: lang, currency: cur, page: page }
    })
  }

  getProductByLocationWithCategory(token, lang, cur, id, category){
    return this.http.get<ResponData>('/posts/show-product-list/' + id, {
      headers: { token: token }, params: { lang: lang, currency: cur, category: category }
    })
  }

  getProductByLocationWithCategoryPaginate(token, lang, cur, id, category, page){
    return this.http.get<ResponData>('/posts/show-product-list/' + id, {
      headers: { token: token }, params: { lang: lang, currency: cur, category: category, page: page }
    })
  }
  
}
