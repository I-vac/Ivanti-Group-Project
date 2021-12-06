import { Component, OnInit } from '@angular/core';
import { JwtClientService } from '../jwt-client.service';
import { SecurityComponent } from '../security/security.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: JwtClientService) { }

  login() {
    var email = ((document.getElementById("email") as HTMLInputElement).value);
    var password = ((document.getElementById("password") as HTMLInputElement).value);

    const authBody = {
      email: email,
      password: password
    }
    this.service.getJwtToken(authBody);
    //window.location.href = "/market";
  }

  ngOnInit(): void {
  }

}
