import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HeaderTopComponent} from './header/header-top/header-top.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {HeaderNavComponent} from './header/header-nav/header-nav.component';
import {LandingComponent} from './header/landing/landing.component';
import {PageSectionsComponent} from "./home-page/page-sections/page-sections.component";
import {JobCategoriesComponent} from "./home-page/page-sections/job-categories/job-categories.component";
import {SectionTitleComponent} from "./ReusableComponent/section-title/section-title.component";
import {JobDetailComponent} from "./home-page/page-sections/job-categories/job-detail/job-detail.component";
import {FeaturedJobsComponent} from "./home-page/page-sections/featured-jobs/featured-jobs.component";
import {JobBoxComponent} from './home-page/page-sections/featured-jobs/job-box/job-box.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CandidatesComponent} from './candidates/candidates.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import {JobsListingComponent} from './jobs-listing/jobs-listing.component';
import {EmployersComponent} from './employers/employers.component';
import {SharedModule} from "./_modules/shared.module";
import {TestErrorComponent} from './errors/test-error/test-error.component';
import {ErrorInterceptor} from "./_interceptors/error.interceptor";
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import {JwtInterceptor} from "./_interceptors/jwt.interceptor";
import { FooterComponent } from './footer/footer.component';
import { CandidateProfileComponent } from './candidates/candidate-profile/candidate-profile.component';


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
    CandidatesComponent,
    RegisterComponent,
    LoginComponent,
    JobsListingComponent,
    EmployersComponent,
    TestErrorComponent,
    NotFoundComponent,
    ServerErrorComponent,
    FooterComponent,
    CandidateProfileComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
