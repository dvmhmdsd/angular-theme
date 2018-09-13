import { ReportsComponent } from './reports/reports.component';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const dashRout: Routes = [
  
]

@NgModule({
  imports: [
    RouterModule.forChild(dashRout)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class DashRoutingModule { }
