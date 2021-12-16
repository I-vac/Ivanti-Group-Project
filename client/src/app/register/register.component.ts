import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _http: HttpService) { }

  visability;
  target: any;

  register() {
    var firstName = ((document.getElementById("first_name") as HTMLInputElement).value);
    var lastName = ((document.getElementById("last_name") as HTMLInputElement).value);
    var email = ((document.getElementById("email") as HTMLInputElement).value);
    var password = ((document.getElementById("password") as HTMLInputElement).value);

    const body = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password
    }

    this._http.registerUser(body);

  }

  registerCreator() {
    var firstName = ((document.getElementById("first_name") as HTMLInputElement).value);
    var lastName = ((document.getElementById("last_name") as HTMLInputElement).value);
  }


  typeSelected() {
    this.visability = true;
  }

  ngOnInit(): void {

  }

}
