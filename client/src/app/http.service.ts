import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient, private router: Router) { }

  readonly API_URL = 'http://localhost:8080/api'

  currentUser: any;

  isloggedIn(){
    if(localStorage.length == 0) {
      return false
    } else{
      return true;
    }
  }


  prepareRequest(token){
    var headers;
    let tokenString = 'Bearer ' + token;
    return headers = new HttpHeaders().set("Authorization", tokenString)
  }

  registerUser(body) {
    return this.http.post<any>(this.API_URL + '/auth/register', body).subscribe(data => {
      console.log(data)
  })
  }

  getPackages() {
    //let headers = this.prepareRequest(localStorage.getItem("token"));
    return this.http.get(this.API_URL + '/packages/all',{responseType: 'Text' as 'json'})
  }

  makeCreator(body) {
    let headers = this.prepareRequest(localStorage.getItem("token"));
    return this.http.post<any>(this.API_URL + '/content', body,{headers}).subscribe(data => {
      console.log(data)
  })
  }

  getPackagesByCategory(category) {
      //let headers = this.prepareRequest(localStorage.getItem("token"));
      return this.http.get(this.API_URL + '/packages/bycategory?category=' + category,{responseType: 'Text' as 'json'})
    }

  getUser(){
      let headers = this.prepareRequest(localStorage.getItem("token"));
      return this.http.get(this.API_URL + '/users/getFullUser', {headers});
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

  createItem() {
    var postId;
    this.http.post<any>(this.API_URL +'/ items', { title: 'Angular POST Request Example', description:'asdasd' }).subscribe(data => {
        postId = data.id;
    })
  }

  createPackage(pack) {
    var postId
    this.http.post<any>(this.API_URL+ '/packages/create', pack).subscribe(data => { postId =data.id})

  }

  viewPackage(userId:any) {
    return this.http.get(this.API_URL + '/packages/byid?id='+ userId,{ responseType: 'Text' as 'json'})
  }

}

