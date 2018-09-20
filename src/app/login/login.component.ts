import { LoginService } from './../login.service';
import { Users } from './../users';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new Users('', '');
  status: boolean;
  
  constructor(private myLogin: LoginService, private myRoute: Router) { }

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
            /* setTimeout(function() {
                location.reload();
            }, 2040); */
        });
    });
  }

  onSubmit(form: any) {
    console.log(form);
    
    let result = this.myLogin.login(form);
    this.status = result;
    if(this.status) {
      setTimeout(() => {
        this.myRoute.navigate(['/dashboard']);
      }, 2000);
    } else {
      setTimeout(() => {
        this.myRoute.navigate(['/signup']);
      }, 2000);
    }
  }  

}