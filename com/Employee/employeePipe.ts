import { Pipe,PipeTransform } from '@angular/core';
import { IUser } from '../DataSource/user'

@Pipe({
    name:'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {
    
    transform(employees:IUser[],filter:string):IUser[]{
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? employees.filter((user:IUser) => user.name.toLocaleLowerCase().indexOf(filter)!==-1):employees;        
    }

}