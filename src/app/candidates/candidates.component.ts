import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";
import {JobBoxModel} from "../home-page/page-sections/featured-jobs/job-box.model";
import {faClockRotateLeft, faLocationDot, faSort, faTag} from "@fortawesome/free-solid-svg-icons";
import {Candidate} from "../_models/candidate.model";


@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({});
  jobTypes = ["Full Time","Remote","Part Time","Freelance"];

  // lists for search prefs
  lastActivityList = ["Last 24 H","Last 03 D","Last 15 D","Last 30 D","30+ D"];
  experienceList = ["Fresh","0 - 1 year","1 year","2 years","3 - 5  years","5+ years"];
  salaryRangeList = ["10 - 20k","20 - 30k","30 - 40k","40 - 50k","50+ K"];
  genders = ["Male","Female"];
  // FontAwesome Icons
  faLocationDot = faLocationDot;
  faClockRotateLeft = faClockRotateLeft;
  faSort = faSort;
  faTag = faTag;


  candidates: Candidate[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {


    this.http.get<Candidate[]>("https://localhost:5001/api/candidates",
    ).subscribe({
      next: response => {
        this.candidates = response;
        console.log(response);
      },
      error: (error) => console.log(error),
      complete: () => console.log("Request completed")
    });

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
