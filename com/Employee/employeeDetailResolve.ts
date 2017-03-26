import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,Resolve,RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/observable'
import { DataService } from '../DataSource/data.service'
import { IAlbum } from '../DataSource/user'

@Injectable()
export class EmployeeResolver implements Resolve<IAlbum> {

    constructor(private _dataService :DataService){
        
    }

    resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<IAlbum>{
        let id = +route.params["id"];
        return  this._dataService.getAlbums(id);            
    }


}
