import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PageSectionsComponent} from "./home-page/page-sections/page-sections.component";
import {CandidatesComponent} from "./candidates/candidates.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {JobsListingComponent} from "./jobs-listing/jobs-listing.component";


const appRoutes: Routes = [
  {path: '', component: PageSectionsComponent},
  {path: 'candidates', component: CandidatesComponent},
  {path: 'login',component: LoginComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'job-listing',component: JobsListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
