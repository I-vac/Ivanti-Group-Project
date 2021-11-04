import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    jQuery(document).ready(function($){
      $(".dropdown-button").dropdown();
      $('.modal').modal();
      $(".signup-toggle").click(function(){
        $(this).hide();
        $(".signupForm").show(300);
        $(".policy").css("visibility","visible");
      });
    });


  }

}
