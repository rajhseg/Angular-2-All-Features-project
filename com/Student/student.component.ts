import { Component,OnInit } from '@angular/core';
import { DataService } from '../DataSource/data.service';
import { IUser } from '../DataSource/user'

@Component({
    selector:'student',
    template:`
    <div style="display:inline-block;width:400px;vertical-align:top">
        <h1>Student </h1>
        <div>
            <input type="text" #std />
            <button (click)="addStudent(std.value)" class="btn btn-sm btn-primary">Add Student</button>
            <button (click)="getStudents()" class="btn btn-sm btn-primary">Get Students</button>
            <div>
                <ul class="list-group">
                    <li class="panel list-group-item-primary" *ngFor="let s of students" style="list-style:none;">
                        
                    </li>
                </ul>
            </div>
        </div>
        </div>
    `
})
export class StudentComponent
{
    students:IUser[];

    constructor(private dataservice:DataService){
        
    }

    addStudent(studentName)
    {
        this.dataservice.addEmployee(studentName);
    }

    getStudents(){
        this.dataservice.getEmployees().subscribe(customer=>this.students=customer,error=>console.log("error"+error));
        //this.students = this.dataservice.getEmployees().;
    }
}