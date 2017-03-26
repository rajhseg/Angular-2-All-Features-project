import { Injectable } from '@angular/core'
import {ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router'

@Injectable()
export class EmployeeDetailGuard implements CanActivate {

    constructor(private _router:Router){

    }

    canActivate(route:ActivatedRouteSnapshot):boolean{
        let id = +route.url[0].path;

        if(isNaN(id) || id < 1)
        {
            alert("invalid Employee");
            this._router.navigate(['/employee']);
            return false;
        }
        return true;
    }

}