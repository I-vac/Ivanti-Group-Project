import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _http: HttpService, private router: Router) { }

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

    this.router.navigateByUrl("/login");

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
