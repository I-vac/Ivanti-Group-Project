import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-market-place',
  templateUrl: './market-place.component.html',
  styleUrls: ['./market-place.component.scss']
})
export class MarketPlaceComponent implements OnInit {

  packages: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getPackages().subscribe(data => {
      this.packages = data
      console.log(this.packages);
  });
}

}
