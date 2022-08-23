import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs"

@Injectable()
class CheckLogged implements CanActivate {
    constructor(
        private router: Router

    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,

    ): boolean | Observable<boolean> | Promise<boolean> {
       
        let usuario = localStorage.getItem('USUARIO');
        let senha = localStorage.getItem('SENHA');
        if (usuario != undefined && senha != undefined) {
            return true;
        } else {
            alert("É necessário realizar login!")
            this.router.navigate([""]);
            return false;
        }

    }

}
export default CheckLogged;
