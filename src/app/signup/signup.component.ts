
import { Users } from '../users';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { member } from '../user';

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
  }

  
  signup(object: any) {
    member.unshift(object);
    console.log(object);
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
