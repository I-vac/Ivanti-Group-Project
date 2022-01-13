import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslationService } from './translation.service';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  readonly ROOT_URL = 'http://127.0.0.1:8080/api';
  items: any;
  constructor(private http: HttpClient, public translationService: TranslationService, private httpService: HttpService, public router: Router) {}
  
  
  currentUser: any;
  loggedIn: boolean;

  getCurrentUser() {
    this.httpService.getUser()
    .subscribe(data => {
      this.currentUser = data;
    });
  }

  getItems() {
    this.items = this.http.get(this.ROOT_URL + '/items');
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl("/loading");
  }

  ngOnInit() {
    this.getCurrentUser();
    this.loggedIn = this.httpService.isloggedIn();
  }

  

  
}
