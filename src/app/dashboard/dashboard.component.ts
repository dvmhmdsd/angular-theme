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
    $(function () {
  
      $('html').on('click', function() {
          $('.not-menu').fadeOut();
          $('.mess-menu').fadeOut();
          $('.profile').fadeOut();
      });
  
  
      $('nav .rest-nav .notifi').on('click', function(e) {
          e.stopPropagation();
          $('.not-menu').fadeToggle();
          $('.mess-menu').fadeOut();
      });
  
      //
      $('.rest-nav .messages').on('click', function(e) {
          e.stopPropagation();
          $('.mess-menu').fadeToggle();
          $('.not-menu').fadeOut();
      });
  
      
      $('li .fa-sign-out').on('click', function() {
              setTimeout(function() {
                  location.reload();
              });
       });

  
       $('.right .clickable').click(function(e) {
          e.stopPropagation();
          $('.profile').fadeToggle();
       });
       //to make the button accessible with keyboard
       $('.right .clickable').keydown(function(e) {
          if (e.keyCode == 32) {
              e.stopPropagation();
              $('.profile').fadeToggle();
          }
       });
       
       $('.links .toggle').on('click', function() {
          $('aside').toggleClass('switch');
          $('.component').toggleClass('switched');
       });
  });
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
   /*  setTimeout(() => {
      location.reload();
    }, 2040); */
    window.history.forward();
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
