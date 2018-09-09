import { ReportsComponent } from './dashboard/reports/reports.component';
import { PreviewComponent } from './dashboard/preview/preview.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'signup', component: SignupComponent},
  {path: 'dashboard/preview', component: PreviewComponent},
  {path: 'dashboard/reports', component: ReportsComponent},
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {}