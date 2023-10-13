import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PageSectionsComponent} from "./page-sections/page-sections.component";
import {CandidatesComponent} from "./candidates/candidates.component";
import {AuthComponent} from "./auth/auth.component";


const appRoutes: Routes = [
  {path: '', component: PageSectionsComponent},
  {path: 'candidates', component: CandidatesComponent},
  {path: 'login',component: AuthComponent},
  {path: 'register',component: AuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
