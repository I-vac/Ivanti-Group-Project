import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HttpService } from '../http.service';
import { SecurityComponent } from '../security/security.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  

  constructor(private _http: HttpService, private sec: SecurityComponent) { }

  currentUser: any;
  isCreator: any;
  packages: any;

  getCurrentUser() {
    this._http.getUser()
    .subscribe(data => {
      this.currentUser = data;
    });
  }

  checkCreator() {
    this._http.isContentCreator()
    .subscribe(data => {
      this.isCreator = data;
    });
  }

  makeCreator() {
    //var company = ((document.getElementById("company") as HTMLInputElement).value);
    //var profession = ((document.getElementById("profession") as HTMLInputElement).value);

    const body = {
      company: "company",
      profession: "profession"
    }

    this._http.makeCreator(body);
  }

  checkCreatorId() {
    this._http.getPackageByUserId()
    .subscribe(data => {
      this.packages = data;
    });
  }

  ngOnInit(): void {
    this.getCurrentUser();
    this.checkCreator();
    this.checkCreatorId();
    //this.checkCreator();
    //this.makeNewCreator();
    //this.currentUser.first_name = "test";
  }

  

}
