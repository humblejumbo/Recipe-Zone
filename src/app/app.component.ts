import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import messaging from 'firebase/messaging';
import { Authservice } from './auth/auth.service';
import {environment} from '../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authserv:Authservice){}

  ngOnInit()
  {
    firebase.initializeApp({
      apiKey: environment.apiKey,
      authDomain: environment.authDomain
    });
    this.authserv.loadUser();
  }
}