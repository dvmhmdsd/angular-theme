import { DashboardComponent } from './../dashboard/dashboard.component';
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  providers: [DashboardComponent],
  selector: 'app-not-found404',
  templateUrl: './not-found404.component.html',
  styleUrls: ['./not-found404.component.css']
})
export class NotFound404Component implements OnInit {

  constructor(private comp: DashboardComponent) { }

  ngOnInit() {
  }

  public navHome() {
    this.comp.navToHome();
    setTimeout(() => {
      $('.load').removeClass('start');
    }, 3000);
    $('.load').addClass('start');
  }

}
