import { Component  } from '@angular/core';

@Component({
    selector:'employee-parent',
    template:`
    <div  [style.width.px]="750">       
        <div class="panel panel-default  panel-primary">
            <div class="panel-heading panel-primary">Employee Information</div>
            <div class="panel-body">
                 <router-outlet></router-outlet>
            </div>
            <div class="panel-footer">Employee@2016</div>
        </div>
    </div>       
    `
})
export class EmployeeParentComponent{
    constructor(){

    }
}