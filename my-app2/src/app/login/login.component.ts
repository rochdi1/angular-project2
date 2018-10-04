import { Component, OnInit } from '@angular/core';
import { SigninService } from '../Services/signin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  status: boolean;
  error: boolean;
  constructor(private signin: SigninService, private myroute: Router) { }

  ngOnInit() {
  }

  signIn() {
    console.log(this.email, this.password);
    // Call for Service
    this.status = this.signin.login(this.email, this.password);

    if (this.status) {
      this.myroute.navigate(['home', this.email]);
    } else {
      this.error = true;
    }
  }

}
