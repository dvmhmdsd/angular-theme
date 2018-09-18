import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any; 

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
      if ($('aside').hasClass('switch')) {
        setTimeout(() => {
          $('.component').addClass('switched');
        }, 5)
      }
    }, 3000);
  }

  navToProfile() {
    setTimeout(() => {
      this.myRout.navigate(['/dashboard/profile']);
      if ($('aside').hasClass('switch')) {
        setTimeout(() => {
          $('.component').addClass('switched');
        }, 10)
      }
    }, 3000);
  }

  navTologout() {
    setTimeout(() => {
      this.myRout.navigate(['/login']);
    }, 2040);
    setTimeout(() => {
      location.reload();
    }, 2040);
  }
  navToRepos() {
    setTimeout(() => {
      this.myRout.navigate(['/dashboard/Repos']);
    }, 3000);
  }

  rightLeft() {
    $('.navigate li, .sidebar .profile-img').on('click', function() {
      if ($('aside').hasClass('switch')) {
        setTimeout(() => {
          $('.component').addClass('switched');
        }, 3000)
      }
    });
  }



}
