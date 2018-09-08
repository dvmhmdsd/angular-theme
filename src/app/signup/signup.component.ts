import { LoginService } from './../login.service';
import { Users } from './../users';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { member } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  model = new Users('', '');
  active: boolean = false;
  button = document.getElementById('button');

  constructor(private myRoute: Router) { }

  ngOnInit() {
  }

  
  signup(object: any) {
    member.push(object);
    this.toggle();
  }

  toggle() {
    if (!this.active) {
      this.active = true;
    }
  }

  navigate() {
    setTimeout(() => {
      this.myRoute.navigate(['/dashboard/preview']);
    }, 2000);
  }

}
