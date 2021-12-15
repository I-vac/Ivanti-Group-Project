import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }

  readonly API_URL = 'http://localhost:8080/api'

  currentUser: any;

 prepareRequest(token){
    var headers;
    let tokenString = 'Bearer ' + token;
    return headers = new HttpHeaders().set("Authorization", tokenString)
  }

  getPackages() {
    //let headers = this.prepareRequest(localStorage.getItem("token"));
    return this.http.get(this.API_URL + '/packages/all',{responseType: 'Text' as 'json'})
  }

  getPackagesByCategory(category) {
      //let headers = this.prepareRequest(localStorage.getItem("token"));
      return this.http.get(this.API_URL + '/packages/bycategory?category=' + category,{responseType: 'Text' as 'json'})
    }

  getUser(){
      let headers = this.prepareRequest(localStorage.getItem("token"));
      return this.http.get(this.API_URL + '/users/getuser', {headers});
  }
  


  searchBar(search) {
    return this.http.get(this.API_URL +  '/packages/regex?search=' + search,{responseType: 'Text' as 'json'});
  }

  public testNewAuth(headers){
    return this.http.get('http://127.0.0.1:8080/items/items',{headers, responseType: 'Text' as 'json'})
  }

  getAllCategories(){
    //let headers = this.prepareRequest(localStorage.getItem("token"));
    return this.http.get(this.API_URL + '/packages/category/all',{ responseType: 'Text' as 'json'})
  }

}

