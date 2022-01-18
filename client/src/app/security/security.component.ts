import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { JwtClientService } from '../jwt-client.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  constructor(private service:JwtClientService, private _http: HttpService) { }

  response: any;
  isCreator: any;

  public getJwtToken(authRequest) {
    let response = this.service.generateToken(authRequest);
    //response.subscribe(data => this.accessApi(data));
    response.subscribe(data => this.storeSession(data));
  }

  public storeSession(data){
    var JsonParse = JSON.parse(data);
    var JwtToken = JsonParse.token;
    localStorage.setItem ('token', JwtToken);
  }

  checkCreator() {
    this._http.isContentCreator()
    .subscribe(data => {
      this.isCreator = data;
    });
  }

  ngOnInit(): void {
    this.checkCreator();
    //this.getJwtToken;;(this.authRequest);
  }

}
