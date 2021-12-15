import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /*this.validatingForm = new FormGroup({
        signupFormModalName: new FormControl('', Validators.required),
        signupFormModalEmail: new FormControl('', Validators.email),
        signupFormModalPassword: new FormControl('', Validators.required),
      });*/
  }

  /*get signupFormModalName() {
      return this.validatingForm.get('signupFormModalName');
    }

    get signupFormModalEmail() {
      return this.validatingForm.get('signupFormModalEmail');
    }

    get signupFormModalPassword() {
      return this.validatingForm.get('signupFormModalPassword');
    }*/

}
