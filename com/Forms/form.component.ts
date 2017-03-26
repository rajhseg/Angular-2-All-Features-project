    import { Component, ViewEncapsulation } from '@angular/core';
    

    @Component({
        selector:'myform',
        templateUrl:'com/Forms/forms.html',
        styles:[`
         
         .fancy {
             color:lightblue;
         }

         .dark{
             font-weight:bold;
         }

         .expand{
            position:relative;
            animation: expand 1s;
            animation-duration:1s;
         }

         .normal{
            position:relative;
            animation: expand 1s;
            animation-duration:1s;
         }

        @keyframes normal{
             0% { width:150%; }           
             100% { width:100%;}
        }

         @keyframes expand{
             0% { width:100%; }            
             100% { width:150%;}
         }

        `]
    })
    export class FormComponent{
        private userfocus:boolean;
        private passfocus:boolean;

        constructor(){
            this.userfocus = true;     
            this.passfocus = false;       
        }

        PasswordFocus(){
            this.userfocus=false;
            this.passfocus = true;            
        }

        UserNameFocus(){
            this.passfocus=false;
            this.userfocus=true;
        }

        focusChanged(value){
            console.log("focus is changed "+value);            
        }

        isFancy(){
            return this.userfocus;
        }

        setuserClass(){
            let cssclass={
                fancy:this.userfocus,
                dark:this.userfocus                
            };
            return cssclass;
        }
    }