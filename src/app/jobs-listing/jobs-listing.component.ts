import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BsDropdownConfig} from "ngx-bootstrap/dropdown";
import {faClockRotateLeft, faLocationDot, faSort} from "@fortawesome/free-solid-svg-icons";
import {JobBoxModel} from "../home-page/page-sections/featured-jobs/job-box.model";


@Component({
  selector: 'app-jobs-listing',
  templateUrl: './jobs-listing.component.html',
  styleUrls: ['./jobs-listing.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class JobsListingComponent implements OnInit {

  jobTypes = ["Full Time","Remote","Part Time","Freelance"];
  searchForm: FormGroup = new FormGroup({});

  // lists for search prefs
  lastActivityList = ["Last 24 H","Last 03 D","Last 15 D","Last 30 D","30+ D"];
  experienceList = ["Fresh","0 - 1 year","1 year","2 years","3 - 5  years","5+ years"];
  salaryRangeList = ["10 - 20k","20 - 30k","30 - 40k","40 - 50k","50+ K"];
  genders = ["Male","Female"];

  faSort = faSort;

  ngOnInit() {
    this.searchForm = new FormGroup({
      jobType: new FormControl("Full Time"),
      lastActivity: new FormControl("Last 24 H"),
      experience: new FormControl("Fresh"),
      salaryRange: new FormControl("10 - 20k"),
      gender: new FormControl("Male")
    });
  }

  onSubmit(){
    console.log(this.searchForm);
  }

  // FontAwesome Icons
  faLocationDot = faLocationDot;
  faClockRotateLeft = faClockRotateLeft;

  @Input() job_box: JobBoxModel = new JobBoxModel(
    "assets/imageedit_1_7716817542.png",
    "Software Engineer",
    12,
    "FullTime",
    "NewYork",
    "Urgent",
    1000,
    2000
  );


}
