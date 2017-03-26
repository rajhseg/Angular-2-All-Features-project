import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { IUser,IAlbum } from './user';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class DataService{

private data:string[]=["Rajesh","suresh","ramu"];
private url:string = "com/DataSource/users.json";

constructor(private _http:Http){

}

getEmployees(): Observable<IUser[]>{
    return this._http.get(this.url)
    .map((response:Response)=><IUser[]>response.json())
    .do(data=>data)
    .catch(this.HandleError);
}

getAlbums(id):Observable<IAlbum>{
    return this._http.get("com/DataSource/albums.json")
    .map((response:Response)=>(<IAlbum[]>response.json()).filter((a,i)=>{ if(a.id == id)return a;}))
    .do(data=>data)
    .catch(this.HandleError);
}


private HandleError(error:Response){
    console.log(error);
    return Observable.throw(error.json().error || "server error");
}

addEmployee(name){
    this.data.push(name);
}

}