import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PageSectionsComponent} from "./page-sections/page-sections.component";
import {CandidatesComponent} from "./candidates/candidates.component";


const appRoutes: Routes = [
  {path: '', component: PageSectionsComponent},
  {path: 'candidates', component: CandidatesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
