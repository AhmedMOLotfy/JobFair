import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HeaderTopComponent} from './header/header-top/header-top.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {HeaderNavComponent} from './header/header-nav/header-nav.component';
import {LandingComponent} from './header/landing/landing.component';
import {PageSectionsComponent} from "./page-sections/page-sections.component";
import {JobCategoriesComponent} from "./page-sections/job-categories/job-categories.component";
import {SectionTitleComponent} from "./ReusableComponent/section-title/section-title.component";
import {JobDetailComponent} from "./page-sections/job-categories/job-detail/job-detail.component";
import {FeaturedJobsComponent} from "./page-sections/featured-jobs/featured-jobs.component";
import {JobBoxComponent} from './page-sections/featured-jobs/job-box/job-box.component';
import {HttpClientModule} from "@angular/common/http";
import { CandidatesComponent } from './candidates/candidates.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderTopComponent,
    HeaderNavComponent,
    LandingComponent,
    PageSectionsComponent,
    JobCategoriesComponent,
    SectionTitleComponent,
    JobDetailComponent,
    FeaturedJobsComponent,
    JobBoxComponent,
    CandidatesComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
