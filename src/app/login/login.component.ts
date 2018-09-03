import { Users } from './../users';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new Users('', '');

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: any) {
    console.log(JSON.stringify(form));
  }  

}
