import { Component, OnInit, ViewChild } from '@angular/core';
import { Authservice } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authserv:Authservice) { }

  @ViewChild('f') signupForm;
  ngOnInit() {
  }

  onSignup()
  {
    let email=this.signupForm.value.email;
    let password=this.signupForm.value.password;
    this.authserv.signupUser(email,password);
  }
}
