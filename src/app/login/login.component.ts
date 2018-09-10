import { LoginService } from './../login.service';
import { Users } from './../users';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

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
  }

  onSubmit(form: any) {
    console.log(form);
    
    let result = this.myLogin.login(form);
    this.status = result;
    if(this.status) {
      setTimeout(() => {
        this.myRoute.navigate(['/dashboard/preview']);
      }, 2000);
    } else {
      setTimeout(() => {
        this.myRoute.navigate(['/signup']);
      }, 2000);
    }
  }  

}