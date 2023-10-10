import { Component } from '@angular/core';
import {faEnvelope, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faLocationCrosshairs} from '@fortawesome/free-solid-svg-icons';

// location-crosshairs
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  faMagnifyingGlass = faMagnifyingGlass;
  faLocationCrosshairs = faLocationCrosshairs;
  faEnvelope = faEnvelope;
}
