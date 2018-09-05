import { Component, OnInit, ViewChild} from '@angular/core';
import { Authservice } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authserv:Authservice) { }

  @ViewChild('f') signinForm;

  ngOnInit() {
  }

  onSignin()
  {
    let email = this.signinForm.value.email;
    let password = this.signinForm.value.password;
    this.authserv.signinUser(email, password);
  }

  

}
