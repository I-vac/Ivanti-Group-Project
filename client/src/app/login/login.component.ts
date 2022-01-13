import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtClientService } from '../jwt-client.service';
import { SecurityComponent } from '../security/security.component';

/*const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});*/

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: JwtClientService, private router: Router) { }

  login() {
    var email = ((document.getElementById("email") as HTMLInputElement).value);
    var password = ((document.getElementById("password") as HTMLInputElement).value);

    const authBody = {
      email: email,
      password: password
    }

    this.service.getJwtToken(authBody);
    this.router.navigateByUrl("/loading");
  }

  ngOnInit(): void {
  }

}
