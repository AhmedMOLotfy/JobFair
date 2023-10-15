import { Component } from '@angular/core';

import {JobBoxModel} from "./job-box.model";
@Component({
  selector: 'app-featured-jobs',
  templateUrl: './featured-jobs.component.html',
  styleUrls: ['./featured-jobs.component.css']
})
export class FeaturedJobsComponent {


  featuredJobs: JobBoxModel[] = [
    new JobBoxModel("assets/imageedit_1_7716817542.png",
      "Senior Software Engineer",
      12,
      "Full Time",
      "Columbus, Ohio",
      "Urgent",
      1000,
      1200),
    new JobBoxModel("assets/imageedit_1_7716817542.png",
        "Senior Software Engineer",
        12,
        "Full Time",
        "Columbus, Ohio",
        "Urgent",
        1000,
        1200),
    new JobBoxModel("assets/imageedit_1_7716817542.png",
        "Senior Software Engineer",
        12,
        "Full Time",
        "Columbus, Ohio",
        "Urgent",
        1000,
        1200),
    new JobBoxModel("assets/imageedit_1_7716817542.png",
        "Senior Software Engineer",
        12,
        "Full Time",
        "Columbus, Ohio",
        "Urgent",
        1000,
        1200),
    new JobBoxModel("assets/imageedit_1_7716817542.png",
        "Senior Software Engineer",
        12,
        "Full Time",
        "Columbus, Ohio",
        "Urgent",
        1000,
        1200),
    new JobBoxModel("assets/imageedit_1_7716817542.png",
        "Senior Software Engineer",
        12,
        "Full Time",
        "Columbus, Ohio",
        "Urgent",
        1000,
        1200),
  ];







}
