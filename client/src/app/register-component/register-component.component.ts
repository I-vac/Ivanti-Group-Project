import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {FormControl, Validators} from '@angular/forms';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.scss']
})
export class RegisterComponentComponent implements OnInit {
  animalControl = new FormControl('', Validators.required);

  constructor(private httpService: HttpService) { }
  packages: Object;
  currentUser: any;
  
  uploadForm: HTMLElement;
  uploadFormInput: HTMLElement;
  downloadFile: HTMLElement;
  fileid: any;

  ngOnInit(): void {
    this.uploadForm = <HTMLElement>document.querySelector("#fileUploadForm");
    this.uploadFormInput = <HTMLInputElement>document.querySelector("#fileUploadInput");
    this.downloadFile = <HTMLElement>document.querySelector("#downloadFileUrl");
  }

  onSubmit(): void {
    var title = ((document.getElementById("title") as HTMLInputElement).value);
    var categories = ((document.getElementById("categories") as HTMLInputElement).value);
    var files = ((document.getElementById("fileUploadInput") as HTMLInputElement).files);
    
      this.httpService.createFile(files[0])

      console.log("ollaa")

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
          "description": categories,
          "title": title};
        this.httpService.createPackage(this.packages);
      });

    
  }


}
