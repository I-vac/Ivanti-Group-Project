import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-market-place',
  templateUrl: './market-place.component.html',
  styleUrls: ['./market-place.component.scss']
})
export class MarketPlaceComponent implements OnInit {

  packages: Object;
  search: Object;
  category: Object;
  packagebycategory: Object;

  constructor(private _http: HttpService) { }

  onSearchChange(searchValue: string): void {
    console.log(searchValue);
  }

  showSearch(search) {
    this._http.searchBar(search).subscribe(data => {
      this.search = data;
    })
  }

  convertToJSON(item: any) {
      return JSON.parse(item);
    }

  showCategory() {
      this._http.getAllCategories().subscribe(data => {
        this.category = data;
      })
    }


  showPackageByCategory(category) {
        this._http.getPackagesByCategory(category).subscribe(data => {
          this.packagebycategory = data;
        })
      }


  ngOnInit() {
  this.showCategory();

    this._http.getPackages().subscribe(data => {
      this.packages = data
      console.log(this.packages);
  });

}

}
