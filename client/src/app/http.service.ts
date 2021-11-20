import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  readonly API_URL = 'http://localhost:8080/api'

  getPackages() {
    return this.http.get('http://localhost:8080/api/packages/all')
  }

  searchBar(search) {
    return this.http.get('http://127.0.0.1:8080/api/packages/regex?search=' + search);
  }
}

