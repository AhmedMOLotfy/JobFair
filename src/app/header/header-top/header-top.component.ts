import {Component} from '@angular/core';
// font awesome icons
import {faArrowRightToBracket,
        faEnvelope,
        faPhoneVolume,
        faUserPlus} from '@fortawesome/free-solid-svg-icons';

// right-to-bracket
@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent {
  // Font Awesome Icons
  faEnvelope = faEnvelope;
  faPhoneVolume = faPhoneVolume;
  faUserPlus = faUserPlus;
  faArrowRightToBracket = faArrowRightToBracket;
}
