import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-package-page',
  templateUrl: './package-page.component.html',
  styleUrls: ['./package-page.component.css']
})
export class PackagePageComponent implements OnInit {
  id: string;
  constructor(private _http: HttpService, 
    private router: Router,
    private ActivatedRoute: ActivatedRoute) { }
  sub;

  downloadFile: HTMLElement;

  packageInfo:any;

  currentUser: any;

  getCurrentUser() {
    this._http.viewPackage(this.id)
    .subscribe(data => {
      this.currentUser = data;
    });
  }


    getContent(){
      this._http.viewPackage(this.id).subscribe((data:string) => {
        this.packageInfo = JSON.parse(data)[0];
        console.log(this.packageInfo);
    });
    }


  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params=>{
        console.log(params.id);
    this.id = params.id;

    this.getContent();
    })

    this.downloadFile = <HTMLElement>document.querySelector("#downloadFileUrl");

    let downloadUrl = "http://localhost:8080/file/download/" + this.packageInfo.fileId;

    this.downloadFile.innerHTML = '<p>File Uploaded Successfully. <br/> <a href="' + downloadUrl + '" target="_self">Download File</a></p>';
    this.downloadFile.style.display = "block";
    
  }

  DownloadFile(){
    window.location.href = 'http://localhost:8080/file/download/' + this.packageInfo.fileId;

  }


  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  onBack():void {
    this.router.navigate(['packageInfo']);
  }


}
