import { Directive,ElementRef} from '@angular/core';

@Directive({
    selector:'[border-select]',
    host:{
        '(dblclick)':'onDoubleClick()'
    }     
})
export class BorderSelectDirective{

    private clicked:boolean = false;

    constructor(private _ele:ElementRef){
       
    }

    onDoubleClick(){
        if(!this.clicked){
            this._ele.nativeElement.style.border = "2px solid red";
            this.clicked = true;
        }
        else{
             this._ele.nativeElement.style.border = 'none';
            this.clicked = false;
        }
    }

    
}