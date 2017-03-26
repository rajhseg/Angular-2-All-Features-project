import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common'
import { Routes, RouterModule } from '@angular/router';

import { StudentComponent } from './student.Component';

@NgModule({
    exports:[RouterModule],
    imports:[CommonModule, RouterModule.forChild([
          { path: 'student', component:StudentComponent}
    ])],
    declarations:[StudentComponent],
    providers:[]
})
export class StudentModule{

}