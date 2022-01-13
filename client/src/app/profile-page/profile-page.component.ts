import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  

  constructor(private _http: HttpService) { }

  currentUser: any;

  getCurrentUser() {
    this._http.getUser()
    .subscribe(data => {
      this.currentUser = data;
    });
  }

  makeCreator() {
    var company = ((document.getElementById("company") as HTMLInputElement).value);
    var profession = ((document.getElementById("profession") as HTMLInputElement).value);

    const body = {
      company: company,
      profession: profession
    }

    this._http.makeCreator(body);
  }

  ngOnInit(): void {
    this.getCurrentUser();
    //this.makeNewCreator();
    this.currentUser.first_name = "test";
  }

}
