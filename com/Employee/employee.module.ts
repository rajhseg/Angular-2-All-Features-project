import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common'
import { Routes, RouterModule } from '@angular/router';

import { EmployeeRoutingModule } from './employee.routing';



export const modules = [RouterModule];

@NgModule({
    exports:modules,
    imports:[EmployeeRoutingModule],
    declarations:[],
    providers:[]
})
export class EmployeeModule{

}