import { Component } from '@angular/core';
import {faPersonChalkboard,faRectangleAd,
  faPaintBrush, faCode, faNetworkWired,
  faUserDoctor,faListCheck, faSatelliteDish} from "@fortawesome/free-solid-svg-icons";
import {JobCategoryModel} from "./JobCategory.model";

@Component({
  selector: 'app-job-categories',
  templateUrl: './job-categories.component.html',
  styleUrls: ['./job-categories.component.css']
})
export class JobCategoriesComponent {
  faPersonChalkboard = faPersonChalkboard;
  faRectangleAd = faRectangleAd;
  faPaintBrush = faPaintBrush;
  faCode = faCode;
  faNetworkWired = faNetworkWired;
  faUserDoctor = faUserDoctor;
  faListCheck = faListCheck;
  faSatelliteDish= faSatelliteDish;

  jobCategories: JobCategoryModel[] = [
    new JobCategoryModel(this.faPersonChalkboard,"Education Training",12),
    new JobCategoryModel(this.faRectangleAd,"Accounting/finance",24),
    new JobCategoryModel(this.faPaintBrush,"Marketing",15),
    new JobCategoryModel(this.faCode,"Design",14),
    new JobCategoryModel(this.faNetworkWired,"Development",11),
    new JobCategoryModel(this.faUserDoctor,"Human Resources",15),
    new JobCategoryModel(this.faListCheck,"Health & Care",16),
    new JobCategoryModel(this.faSatelliteDish,"Project Management",54),
    new JobCategoryModel(this.faSatelliteDish,"Project Management",10)
  ];


}
