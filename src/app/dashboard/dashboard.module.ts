import { ReportsComponent } from './reports/reports.component';
import { DashRoutingModule } from './dash-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashRoutingModule
  ],
  declarations: [
    ReportsComponent
  ]
})
export class DashboardModule { }
