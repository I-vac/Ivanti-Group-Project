import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { equal } from 'assert';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-market-place',
  templateUrl: './market-place.component.html',
  styleUrls: ['./market-place.component.scss']
})
export class MarketPlaceComponent implements OnInit {

  packages: Object;
  search: Object;
  //search: Object[];
  category: Object;
  packagebycategory: Object;
  categories = new FormControl();

  id: string;
  constructor(private _http: HttpService, private router: Router) { }

  onSearchChange(searchValue: string): void {
    console.log(searchValue);
  }

  showSearch(search) {
    this._http.searchBar(search).subscribe(data => {
      this.search = data;
    })
  }

  sortClick(){
    //console.log(this.search)
    //var a =this.search[0].items.sort((a,b) => a.title > b.title ? 1 : -1)
    //console.log(a)
    //const Response = JSON.parse(this.search)
    //var a =this.Response.sort((a,b) => a.title > b.title ? 1 : -1)
    let x = JSON.parse(this.search.toString())
    const sortedArray = this.sortArrayOfObjects(x, "title", "ascending")
    console.log(sortedArray)
    this.search = JSON.stringify(sortedArray);
  }

  sortArrayOfObjects = <T>(
    data: T[],
    keyToSort: keyof T,
    direction: 'ascending' | 'descending' | 'none',
  ) => {
    if (direction === 'none') {
      return data
    }
    const compare = (objectA: T, objectB: T) => {
      const valueA = objectA[keyToSort]
      const valueB = objectB[keyToSort]

      if (valueA === valueB) {
        return 0
      }

      if (valueA > valueB) {
        return direction === 'ascending' ? 1 : -1
      } else {
        return direction === 'ascending' ? -1 : 1
      }
    }

    return data.slice().sort(compare)
  }


  convertToJSON(item: any) {
      return JSON.parse(item);
    }

  showCategory() {
      this._http.getAllCategories().subscribe(data => {
        this.category = data;
      })
  }

   someFunction(input){
      alert(input);
   }


  showPackageByCategory(category) {
        this._http.getPackagesByCategory(category).subscribe(data => {
          this.packagebycategory = data;
        })
      }

  ngOnInit() {
  this.showCategory();
  this._http.createItem();

  
  
    this._http.getPackages().subscribe(data => {
      this.packages = data
      console.log(this.packages);
  });
}

viewPackage(userId:any) {

  this.router.navigate(['/packagepage/', userId]);
}

}
