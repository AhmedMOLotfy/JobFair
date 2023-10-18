import {Component, Input} from '@angular/core';
import {JobCategoryModel} from "../../../../_models/JobCategory.model";
import {faArrowsToCircle} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent {
    @Input() jobCategory: JobCategoryModel = new JobCategoryModel(
        faArrowsToCircle,"",3
    );
}
