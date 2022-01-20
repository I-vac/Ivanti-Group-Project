import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.scss']
})
export class RegisterComponentComponent implements OnInit {

  constructor(private httpService: HttpService, private router: Router) { }
  packages: Object;
  currentUser: any;
  category:any;

  uploadForm: HTMLElement;
  uploadFormInput: HTMLElement;
  downloadFile: HTMLElement;
  fileid: any;
  success : false;

  ngOnInit(): void {
    this.uploadForm = <HTMLElement>document.querySelector("#fileUploadForm");
    this.uploadFormInput = <HTMLInputElement>document.querySelector("#fileUploadInput");
    this.downloadFile = <HTMLElement>document.querySelector("#downloadFileUrl");
    this.showCategory()
  }

  createEventListener() {
    document.getElementById("uploadButton").addEventListener('click', (function () {

      const files = this.uploadFormInput.files;
      console.log("work");
      if (files.length !== 0) {
        this.uploadFile(files[0]);
        event.preventDefault();
      } else {
        alert('Please select a file')
      }

    }).bind(this), true);

  }

  showCategory() {

}

  uploadFile(file) {
    let formData = new FormData();
    formData.append("file", file);

    let req = new XMLHttpRequest();
    req.open("POST", "http://localhost:8080/file/upload")

    req.onload = (function () {
      this.fileid = req.responseText;
    }).bind(this)

    req.send(formData);

  }

  onSubmit(): void {
    var title = ((document.getElementById("title") as HTMLInputElement).value);
    var os = ((document.getElementById("OS") as HTMLInputElement).value);
    var description = ((document.getElementById("description") as HTMLInputElement).value);
    var installDesc = ((document.getElementById("Installation") as HTMLInputElement).value);

    var fileid = null;
      this.httpService.getUser()
      .subscribe(user => {

        this.packages = {
          "category": {
            "id": "string",
            "name": "string"
          },
          "contentCreator": {
            user,
            "company": "company",
            "profession": "profession"
          } ,
          "fileId": this.fileid,
          "description": description,
          "title": title,
          "installDesc" : installDesc,
          "os" : os
        };
        this.httpService.createPackage(this.packages);
        this.router.navigateByUrl("/profile");
      });
  }


}
