import { DashboardModule } from './dashboard/dashboard.module';
import { PreviewComponent } from './dashboard/preview/preview.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';


import { AppRoutingModule } from './app-routing.module';
import { NotFound404Component } from './not-found404/not-found404.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent,
    PreviewComponent,
    NotFound404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
