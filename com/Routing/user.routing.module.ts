import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common'
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeModule } from '../Employee/employee.module'
import { StudentModule } from '../Student/student.module'


const routes: Routes = [ 
  // { path: 'employee', loadChildren:'com/Employee/employee.module#EmployeeModule'},    
];


@NgModule({
  imports : [CommonModule,FormsModule,EmployeeModule, StudentModule,RouterModule.forChild(routes)],
  declarations:[],
  providers:[],
  exports: [RouterModule,FormsModule],
})

export class UserRoutingModule { }

