import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "./Login.service";
import { Injectable } from "@angular/core";


@Injectable()
export class LoginGuardian implements CanActivate{

    constructor(private route: Router,private loginService:LoginService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
         if(this.loginService.getIdToken()!=''){
            return true
         }
         else{
            
            this.route.navigate(['/login'])
            return false;
         }
    }

}