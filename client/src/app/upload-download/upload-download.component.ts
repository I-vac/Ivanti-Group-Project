import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-download',
  templateUrl: './upload-download.component.html',
  styleUrls: ['./upload-download.component.css']
})
export class UploadDownloadComponent implements OnInit {

  uploadForm: HTMLElement;
  uploadFormInput: HTMLElement;
  downloadFile: HTMLElement;

  constructor() { }

  ngOnInit(): void {
    this.uploadForm = <HTMLElement>document.querySelector("#fileUploadForm");
    this.uploadFormInput = <HTMLInputElement>document.querySelector("#fileUploadInput");
    this.downloadFile = <HTMLElement>document.querySelector("#downloadFileUrl");
    this.createEventListener();

  }

  uploadFile(file) {
    let formData = new FormData();
    formData.append("file", file);

    let req = new XMLHttpRequest();
    req.open("POST", "http://localhost:8080/file/upload")

    req.onload = (function () {
      console.log(req.responseText);

      let response = req.responseText;

      if (response !== null) {
        let downloadUrl = "http://localhost:8080/file/download/" + response;

        this.downloadFile.innerHTML = '<p>File Uploaded Successfully. <br/> <a href="' + downloadUrl + '" target="_self">Download File</a></p>';
        this.downloadFile.style.display = "block";
      } else {
        alert("Error Occured! No file returned");
      }
    }).bind(this)

    req.send(formData);

  }

  createEventListener() {
    this.uploadForm.addEventListener('submit', (function (event) {
      const files = this.uploadFormInput.files;

      if (files.length !== 0) {
        this.uploadFile(files[0]);
        event.preventDefault();
      } else {
        alert('Please select a file')
      }

    }).bind(this), true);

  }

}



