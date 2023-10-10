import {Component, Input} from '@angular/core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {JobBoxModel} from "../job-box.model";
@Component({
  selector: 'app-job-box',
  templateUrl: './job-box.component.html',
  styleUrls: ['./job-box.component.css']
})
export class JobBoxComponent {
    isSaved = false;
    // FontAwesome Icons
    faLocationDot = faLocationDot;
    faClockRotateLeft = faClockRotateLeft;

    @Input() job_box: JobBoxModel = new JobBoxModel(
        "",
        "",
        0,
        "",
        "",
        "",
        0,
        0
    );


  onIconClick(){
    this.isSaved = !this.isSaved;
  }

    constructor(library: FaIconLibrary) {
        library.addIcons(farHeart,fasHeart);
    }



}
