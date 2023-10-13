import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, NgForm} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{
  isLogin = true;



  constructor(private router: Router) {
  }

  ngOnInit() {
    if(this.router.url !== '/login'){
      this.isLogin = false;
    }
  }



}
