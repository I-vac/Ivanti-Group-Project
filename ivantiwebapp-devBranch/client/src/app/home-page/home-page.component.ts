import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import { TranslationService } from '../translation.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
