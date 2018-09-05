import * as firebase from 'firebase';
import messaging from 'firebase/messaging';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { FlashMessagesService } from '../../../node_modules/angular2-flash-messages';

@Injectable()
export class Authservice{
    token:string;

    constructor(private router:Router,private flashMessage:FlashMessagesService){}

    signupUser(email:string, password:string) {
        firebase.auth().createUserWithEmailAndPassword(email,password)
            .then((response) => {
                firebase.auth().currentUser.getIdToken()
                    .then((token: string) => {
                        this.token = token;
                    }
                );
                this.router.navigate(['/']);
                this.flashMessage.show('You have signedup successfully!', { cssClass: 'alert-success', timeout: 4000 });
            })
        .catch((error)=>{
            this.flashMessage.show(error.message, { cssClass: 'alert-danger', timeout: 4000 });
        });
    }

    signinUser(email:string,password:string)
    {
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then((response)=>
        {
            firebase.auth().currentUser.getIdToken()
                .then((token: string) => {
                    this.token = token;
                }
            );
            this.router.navigate(['/']);
            this.flashMessage.show('You are now logged in!', { cssClass: 'alert-success', timeout: 4000 });
        })
        .catch((error)=>
        {
            this.flashMessage.show(error.message, { cssClass: 'alert-danger', timeout: 4000 });
        });
    }

    logout()
    {
        firebase.auth().signOut();
        this.token=null;
        this.router.navigate(['/']);
        this.flashMessage.show('You are logged out!', { cssClass: 'alert-success', timeout: 4000 });
    }

    getToken()
    {
        firebase.auth().currentUser.getIdToken()
        .then((token:string)=>
    {
       this.token=token;
    });
        return this.token;
    }

    // to keep the user loggedin
    loadUser() {
        firebase.auth().onAuthStateChanged((currentUser) => {
            if (currentUser === null) {
                this.token = null;
            } 
            else {
                currentUser.getIdToken().then(
                    (token: string) => this.token = token
                );
            }
        });
    }

    isAuthenticated()
    {
        return this.token!=null;
    }
}