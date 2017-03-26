import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { EmployeesComponent } from './employees.component'
import { EmployeeDetailComponent } from './employee.detail';
import { EmployeeParentComponent } from './employee.parent';
import { EmployeeDetailGuard } from './employeeDetailGuard';
import { EmployeeResolver } from './employeeDetailResolve'
import { EmployeeFilterPipe } from './employeePipe'


export const route:Routes = [
    {   path:'employee',
        component:EmployeeParentComponent,
        children:[            
            {
                path:'',
                component:EmployeesComponent
            },
            {
                path:':id',
                component:EmployeeDetailComponent,
                canActivate:[EmployeeDetailGuard],
                resolve:{ userinfo:EmployeeResolver }
            }
        ]
    }    
];


export const components = [EmployeeParentComponent,EmployeesComponent,EmployeeDetailComponent,EmployeeFilterPipe];
export const modules = [CommonModule,FormsModule,RouterModule];


@NgModule({
    exports:modules,
    imports:[CommonModule,FormsModule,RouterModule.forChild(route)],
    declarations:components,
    providers:[EmployeeDetailGuard,EmployeeResolver]
})

export class EmployeeRoutingModule{

}