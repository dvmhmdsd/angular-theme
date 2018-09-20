
import { Users } from '../users';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { member } from '../user';

declare var $:any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})



export class SignupComponent implements OnInit {

  model = new Users('', '');
  active: boolean = false;

  constructor(private myRoute: Router) { }

  ngOnInit() {
    $(function () {
      //mentain the style of input fields
  
      $('.form .form-control').on('focus', function() {
          $(this).siblings('label').addClass('focus');
      });
  
      $('.form .form-control').on('focusout', function() {
          if ($(this).val() == '') {
              $(this).siblings('label').removeClass('focus');
          }
          if ($(this).hasClass('ng-invalid')) {
              $(this).siblings('label').addClass('focus');
          }
      });
  
      $("form .button").on('click', function () {
          $(this).addClass("progression");
      });
  
      $('.form .form-control').removeClass('ng-invalid');
      
      $('.form .buttons').on('click', function() {
              setTimeout(function() {
                  location.reload();
              });
       });
  
       $('.form .button, .logger').on('click', function() {
          setTimeout(function() {
              location.reload();
          }, 2040);
      });
       
  
  });
  }

  
  signup(object: any) {
    member.unshift(object);
    //console.log(object);
    console.log(member[0]);
    this.toggle();
  }

  toggle() {
    if (!this.active) {
      this.active = true;
    }
  }

  navigate() {
    setTimeout(() => {
      this.myRoute.navigate(['/dashboard']);
    }, 2000);
  }

}
