import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private http: HttpClient) { }


  readonly API_URL = 'http://localhost:8080/api';

  public generateToken(request) {
    return this.http.post(this.API_URL + '/auth/login', request,{responseType: 'Text' as 'json'});
  }

  public getJwtToken(authRequest) {
    let response = this.generateToken(authRequest);
    //response.subscribe(data => this.accessApi(data));
    response.subscribe(data => this.storeSession(data));
  }

  public storeSession(data){
    var JsonParse = JSON.parse(data);
    var JwtToken = JsonParse.token;
    localStorage.setItem ('token', JwtToken);
  }

  public resetSession() {
    //localStorage.removeItem('token');
  }

  public prepareRequest(token){
    var headers;
    var JsonParse = JSON.parse(token);
    var JwtToken = JsonParse.token;
    let tokenString = 'Bearer ' + JwtToken;
    return headers = new HttpHeaders().set("Authorization", tokenString)
  }



}
