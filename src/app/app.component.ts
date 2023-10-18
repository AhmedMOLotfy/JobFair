import {Component, OnInit} from '@angular/core';
import {AccountService, UserDto} from "./_services/account.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'JobFair';

  constructor(private accountService: AccountService) {
  }

  ngOnInit() {
    this.setCurrentUser();
  }

  // get stored user if any in accountService itself
  setCurrentUser(){
    const userString = localStorage.getItem("user");
    if(!userString){
      return;
    }
    const user: UserDto = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }

}
