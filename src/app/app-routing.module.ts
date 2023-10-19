import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PageSectionsComponent} from "./home-page/page-sections/page-sections.component";
import {CandidatesComponent} from "./candidates/candidates.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {JobsListingComponent} from "./jobs-listing/jobs-listing.component";
import {EmployersComponent} from "./employers/employers.component";
import {authGuard} from "./_guards/auth.guard";


const appRoutes: Routes = [
  {path: '', component: PageSectionsComponent},
  {path: '/',
    runGuardsAndResolvers: 'always',
    canActivate: [authGuard],
    children: [
      {path: 'candidates', component: CandidatesComponent},
      {path: 'job-listing',component: JobsListingComponent},
      {path: 'employers', component: EmployersComponent}
    ]},
  {path: 'login',component: LoginComponent},
  {path: 'register',component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
