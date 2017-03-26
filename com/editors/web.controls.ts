import { Component, ViewEncapsulation, Input, Output,OnInit,
    ElementRef,AfterViewInit,AfterViewChecked } from '@angular/core';

declare var jQuery:any;

@Component({
 moduleId:module.id,
 selector:'checkbox',
 template:`
    <div [ngSwitch]="type" style="display:inline-block">
        <div *ngSwitchCase="'fancy1'">    
            <input name="Rcheckbox1" id="Rcheckbox1" class="checkcontrol"  type="checkbox" checked>
            <label for="Rcheckbox1" class="checkcontrol-label text-muted">{{label}}</label>    
        </div>
        <div *ngSwitchCase="'fancy2' ">
            <input name="Rcheckbox2" id="Rcheckbox2" class="checkcontrol" type="checkbox" checked>
            <label for="Rcheckbox2" class="checkcontrol-label text-muted">{{label}}</label>
        </div>
        <div *ngSwitchCase="'fancy3'">   
        <div style="display:inline-block">         
            <label class="fancycheck fancycheckbox text-muted">{{label}}
                <input type="checkbox" checked="checked"/>
                <div class="fancydraw"></div>
            </label>  
        </div>               
        </div>
        <div *ngSwitchDefault>   
            <input id="Rcheckbox4" #check class="" name="Rcheckbox4" type="checkbox" checked>
            <label for="Rcheckbox4" class="Rcheckbox-label text-muted commonEditor">{{label}}</label>
        </div>
    </div>
 `,
 styleUrls:['web.controls.css'],
 styles:[`

   .commonEditor{
        font-size:20px;
        font-weight:400
     }

    #Rcheckbox1:checked + .checkcontrol-label:before {
        background: #2aa1c0;
    }

   #Rcheckbox2:checked + .checkcontrol-label:before {
        background: #2aa1c0;
        box-shadow: inset 0px 0px 0px 4px #fff;
    }
    
   .fancycheck input:checked ~ .fancydraw {
        background: #2aa1c0;
    }

    .fancycheck:hover input:not([disabled]):checked ~ .fancydraw,
    .fancycheck input:checked:focus ~ .fancydraw {
        background: #0e647d;
    }

 `],
 
})
export class CheckBoxComponent implements OnInit{
    
    @Input('label') label:string;
    @Input('type') type:string;

    constructor(private ele:ElementRef){
      console.log(this.type);
    }

    ngOnInit(){
        console.log(this.type);
      
    }

    checked(value){
        console.log(value);
    }

}

@Component({
    moduleId:module.id,
    selector:'radiobutton',    
    template:`
     <div [ngSwitch]="type" style="display:inline-block">
        <div *ngSwitchCase="'fancy1'">    
            <input name="{{name}}" id="{{radioId}}" [attr.value]="label" class="radiocontrol radiocontrol1"  type="radio" checked>
            <label  [attr.for]="radioId"  class="radiocontrol-label text-muted">{{label}}</label>    
        </div>
        <div *ngSwitchCase="'fancy2'">
            <input name="{{name}}" id="{{radioId}}" [attr.value]="label" class="radiocontrol radiocontrol2" type="radio" >
            <label  [attr.for]="radioId"  class="radiocontrol-label text-muted">{{label}}</label>
        </div>             
        <div *ngSwitchDefault>   
            <input name="{{name}}" [attr.id]="radioId" [attr.value]="label" type="radio" value="{{label}}">  
             <label [attr.for]="radioId" class="text-muted commonEditor">{{label}}</label>          
        </div>
    </div>
    `,
    styleUrls:['web.controls.css'],
    styles:[` 
    
    .commonEditor{
        font-size:20px;
        font-weight:400
     }

    .radiocontrol1:checked + .radiocontrol-label:before {
        background: #2aa1c0;
        box-shadow: inset 0px 0px 0px 4px #fff;
    }


    .radiocontrol2:checked + .radiocontrol-label:before {
        background: #2aa1c0;
    }     
    
    `],
    host:{
        '[id]':'id'
    }
})
export class RadioButtonComponent implements OnInit , AfterViewInit{

   @Input('id') radioId:string;
   @Input('label') label:string;
   @Input('type') type:string;
   @Input('color') color:string;
   @Input('name') name:string;
   @Input('ischeck') ischeck:boolean = true;

    constructor(private ele:ElementRef){
       if(this.name===undefined || this.name ===''){
           this.name = 'editorRadiobox';
       }
    }

    ngOnInit(){
       
    }

    ngAfterViewInit(){   
        if(this.color!==undefined && this.color!==''){
            if(this.type=='fancy1') {
                jQuery(`
                    <style>#Radiobox1:checked + .radiocontrol-label:before { 
                        background: `+this.color+`!important; 
                        box-shadow: inset 0px 0px 0px 4px #fff;
                    }</style>
                `).appendTo('head');        
            }

            if(this.type=='fancy2'){
                jQuery(`
                    <style>#Radiobox2:checked + .radiocontrol-label:before { 
                        background: `+this.color+`!important;                  
                    }</style>
                `).appendTo('head');   
            }
        }
    }

    checked(value){
        console.log(value);
    }


}