import { Component,OnInit } from '@angular/core';
import { DataService } from '../DataSource/data.service';
import { IUser } from '../DataSource/user'

@Component({
    selector:'employees',
    template:`
    <div style="display:inline-block;width:400px;vertical-align:top">      
        <br/>
        <div class="container text-primary"><b>Filter by Name</b> 
            <input type="text" 
                [ngModel]="emp" (ngModelChange)="emp=$event" /> </div>
        <br/>       
        <div>              
        <table class="table table-bordered table-hover" [style.width.px]="700">
            <thead>
                <tr class="text-info">
                    <th>User Name</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>ZipCode</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr [class.info]="EnableStyle(i)" *ngFor="let e of employees| employeeFilter:emp;let i=index" >
                    <td>{{e.username}}</td>
                    <td>{{e.name}}</td>
                    <td>{{e.address.city}}</td>
                    <td>{{e.address.zipcode}}</td>
                    <td><a class="btn btn-sm btn-success" [routerLink]="['/employee',e.id]">Detail info</a></td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
    `   
})
export class EmployeesComponent implements OnInit
{
    employees:IUser[];
  
    constructor(private dataservice:DataService){
        
    }

    ngOnInit(){
        this.getEmployee();
    }

    addEmployee(employeeName)
    {
        this.dataservice.addEmployee(employeeName);
    }

    getEmployee(){
        this.dataservice.getEmployees()
        .subscribe(
            customer=>this.employees=customer,
            error=>console.log("error"+error)
            );
       
    }

    EnableStyle(i){       
        if(i%2==0){
            return true;
        }
    }
}
