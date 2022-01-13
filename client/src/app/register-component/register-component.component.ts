import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpService } from '../http.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.scss']
})
export class RegisterComponentComponent implements OnInit {
  animalControl = new FormControl('', Validators.required);

  constructor(private httpService: HttpService) { }
  packages: Object;
  category: Object;


  ngOnInit(): void {
  }

  showCategory() {
    this.httpService.getAllCategories().subscribe(data => {
      this.category = data;
    })
  }


  onSubmit(): void {
    var name = ((document.getElementById("name") as HTMLInputElement).value);
    var OS = ((document.getElementById("OS") as HTMLInputElement).value);
    var categories = ((document.getElementById("categories") as HTMLInputElement).value);
    this.packages = {
    "category": {
      "id": "string",
      "name": "string"
    },
    "contentCreator": {
      "company": "string",
      "profession": "string",
      "user": {
        "createdAt": "2021-12-14T10:06:39.575Z",
        "email": "string",
        "enabled": true,
        "first_name": "string",
        "last_name": "string",
        "password": "string",
        "roles": [
          {
            "id": "string",
            "role": "string"
          }
        ]
      }
    },
    "description": categories,
    "title": name};
  this.httpService.createPackage(this.packages);
  }

}
