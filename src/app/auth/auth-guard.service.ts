import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Authservice } from "./auth.service";
import { Injectable } from "@angular/core";
import { FlashMessagesService } from "../../../node_modules/angular2-flash-messages";

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private authserv:Authservice,private router:Router,private flashMessage:FlashMessagesService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    {
        if(this.authserv.isAuthenticated())
        return true;
        else
        {
            this.flashMessage.show('You need to signin first!', { cssClass: 'alert-danger', timeout: 4000 });
            this.router.navigate(['/signin']);
        }
        
    }
}