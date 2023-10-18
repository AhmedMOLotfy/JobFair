import {Component} from '@angular/core';
import {faArrowRight, faCircleCheck, faCircleRight, faMagnifyingGlass, faUser} from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-how-work',
    templateUrl: './how-work.component.html',
    styleUrls: ['./how-work.component.css']
})
export class HowWorkComponent {
    faUser = faUser;
    faMagnifyingGlass = faMagnifyingGlass;
    faCircleCheck = faCircleCheck;
    faCircleRight = faCircleRight;
    faArrowRight = faArrowRight;
}
