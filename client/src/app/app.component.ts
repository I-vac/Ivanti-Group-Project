import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  readonly ROOT_URL = 'http://127.0.0.1:8080/api';
  items: any;
  constructor(private http: HttpClient) {}

  getItems() {
    this.items = this.http.get(this.ROOT_URL + '/items');
  }
}
