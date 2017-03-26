import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { IUser,IAlbum } from '../DataSource/user'
import { DataService} from '../DataSource/data.service'

@Component({
    template:`
    <div class="panel panel-primary" [style.width.px]="400">    
        <div class="panel-heading">        
            Employee ID {{id}}
        </div>
        <div class="panel-body">
            <div *ngIf="Album">
                <ul class="list-group">
                <li class="list-group-item">
                    <div class="panel panel-default">
                        <div class="panel-heading text-info">{{Album.title}}</div>
                        <div class="panel-body">                                              
                            <div [style.width.px]="150" [style.height.px]="150" [style.background]="Album.thumbnailUrl"></div>
                        </div>
                        <div class="panel-footer">
                            <a class="btn btn-default" (click)="Back()" [style.width.px]="80">
                                <i class="glyphicon glyphicon-chevron-left"></i>Back
                            </a>
                        </div>
                    </div>
                </li>
                </ul>
            </div>
        </div>
    </div>
    `
})
export class EmployeeDetailComponent implements OnInit{
      
    id:string = '';
    Album:IAlbum = null;

    constructor(private _router:Router,private _route:ActivatedRoute,
        private _dataservice:DataService){        
    }

    Back():void{
        this._router.navigate(['/employee']);
    }

    ngOnInit(){
      
        let id = +this._route.snapshot.params["id"];
        this.id +=`:${id}`;        
        this.Album = this._route.snapshot.data['userinfo'][0]
        
        //  this._dataservice.getAlbums(id)
        //     .subscribe(
        //           album=>this.Album = album [0]
        //     );

    }

}