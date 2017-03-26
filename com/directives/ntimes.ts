import { Directive, Input, ElementRef,TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
    selector:'[ntimes]'
})
export class ntimesDirective{

constructor(private _template:TemplateRef<Object>, private container:ViewContainerRef){

}

@Input() set ntimes(value:number){    
    this.container.clear();    
    for(var i=0;i<value;i++){
        this.container.createEmbeddedView(this._template);
    }
}


}