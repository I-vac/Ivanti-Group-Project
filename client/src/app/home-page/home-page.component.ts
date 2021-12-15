import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import { TranslationService } from '../translation.service';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {

  constructor(private _http: HttpService) { }

  currentUser: any;

  getCurrentUser() {
    this._http.getUser()
    .subscribe(data => {
      this.currentUser = data;
    });
  }
  

  ngOnInit(): void {
    this.getCurrentUser();
  }

}
