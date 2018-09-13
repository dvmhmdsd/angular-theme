import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private myRout: Router) {
   }

  ngOnInit() {
  }


  navToHome() {
    setTimeout(() => {
      this.myRout.navigate(['/dashboard']);
    }, 3000);
  }

  navToProfile() {
    setTimeout(() => {
      this.myRout.navigate(['/dashboard/profile']);
    }, 3000);
  }

  logOut() {
    setTimeout(() => {
      this.myRout.navigate(['/login']);
    }, 2040);
  }

}
