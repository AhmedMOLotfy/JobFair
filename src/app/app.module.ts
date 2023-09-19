import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderTopComponent } from './header/header-top/header-top.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import { HeaderNavComponent } from './header/header-nav/header-nav.component';
import { LandingComponent } from './header/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderTopComponent,
    HeaderNavComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
