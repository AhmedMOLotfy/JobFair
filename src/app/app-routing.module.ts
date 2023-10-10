import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PageSectionsComponent} from "./page-sections/page-sections.component";


const appRoutes: Routes = [
  {path: '', component: PageSectionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
