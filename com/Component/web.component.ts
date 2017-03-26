import { Component,ViewEncapsulation,Input,Output } from '@angular/core';


@Component({
    selector:'webform',
    template:`
    <form name="loginform" class="form-group" id="loginform" action="{{formaction}}" method="{{formmethod}}">        
         <my-app></my-app>         
    </form>`,
    styles:[`
        form {
            display:block;
            margin-top: 20px;
            margin-left: 0;
            padding: 26px 24px 46px;
            background: #fff;
            -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.13);
            box-shadow: 0 1px 3px rgba(0,0,0,.13);
        }

    form,h1 a {
        overflow: hidden;
        font-weight: 400;
    }
    .forget {
        font-weight: 400;
        float: left;
        margin-bottom: 0;
    }
    .input{        
        border: 1px solid #ddd;
        -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,.07);
        box-shadow: inset 0 1px 2px rgba(0,0,0,.07);
        background-color: #fff;
        color: #32373c;
        outline: 0;
        -webkit-transition: 50ms border-color ease-in-out;
        transition: 50ms border-color ease-in-out;
    }

    `],
    encapsulation:ViewEncapsulation.None
})
export class webformComponent{

    @Input('formaction') formaction:string;
    @Input('formmethod') formmethod:string;
    @Input('redirect') redirect:string;
    sectiondata:string = 'sidebar1';

    public username:string = "";
    public password:string = "";


    constructor(){

    }

    ngPrint(){   
        console.log("sample");  
         this.sectiondata = '';    
        this.sectiondata = "sidebar";
    }

    ngPrint1(){
         console.log("sample1");  
         this.sectiondata = '';    
        this.sectiondata = "sidebar1";
    }

}