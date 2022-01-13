import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-load-page',
  templateUrl: './load-page.component.html',
  styleUrls: ['./load-page.component.css']
})
export class LoadPageComponent implements OnInit {

  constructor(private router: Router) { }

  

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/home']);
  }, 1000);
  }

}
