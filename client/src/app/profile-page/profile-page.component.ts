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
  user: any;

  getCurrentUser() {
    this._http.getUser()
    .subscribe(data => {
      this.currentUser = data;
    });
  }

  makeNewCreator() {
    console.log(this.currentUser)
    this.user = {
      "user":{
         "_id":{
            "$oid": this.currentUser.id
         },
         "first_name": this.currentUser.first_name,
         "last_name": this.currentUser.last_name,
         "email": this.currentUser.email,
         "password": this.currentUser.password,
         "createdAt":{
            "$date": this.currentUser.createdAt
         }
      },
      "company":"MicroSoft",
      "profession":"Engineer",
      "_class":"com.ivantiWebApp.server.Model.ContentCreator"
   }
    
    //let conv = JSON.stringify(myData);
    this._http.makeCreator(this.user);

    alert("Created!");
    location.reload();
  }

  ngOnInit(): void {
    this.getCurrentUser();
    this.makeNewCreator();
  }

}
