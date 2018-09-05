import { NgModule } from "@angular/core";
import { AuthRoutingModule } from "./auth-routing.module";

import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";
import { FormsModule } from "@angular/forms";
import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
    declarations:[
        SignupComponent,
        SigninComponent
    ],
    imports:[
        FormsModule,
        FlashMessagesModule.forRoot(),
        AuthRoutingModule
    ],
    exports:[
        FlashMessagesModule
    ]
})

export class AuthModule{

}