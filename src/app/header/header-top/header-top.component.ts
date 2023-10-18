import {Component, OnInit} from '@angular/core';
// font awesome icons
import {faArrowRightToBracket,
        faEnvelope,
        faPhoneVolume,
        faUserPlus,
        faArrowRightFromBracket,
        faUser} from '@fortawesome/free-solid-svg-icons';
import {AccountService, UserDto} from "../../auth/account.service";
import {Router} from "@angular/router";
import {Observable, of} from "rxjs";

// right-to-bracket
@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit{
  // Font Awesome Icons
  faEnvelope = faEnvelope;
  faPhoneVolume = faPhoneVolume;
  faUserPlus = faUserPlus;
  faArrowRightToBracket = faArrowRightToBracket;
  faUser = faUser;
  faArrowRightFromBracket = faArrowRightFromBracket;


  constructor(public authService: AccountService, private router: Router) {
  }

  ngOnInit() {
  }



  logout(){
    this.authService.logout();
    this.router.navigate(['/']).then();
  }

}
