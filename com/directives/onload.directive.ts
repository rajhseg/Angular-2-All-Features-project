import { Directive, ElementRef,Renderer,Input,AfterViewInit,AfterViewChecked,
         HostListener,OnChanges,Output,EventEmitter } from '@angular/core';

@Directive({
    selector:'[focus-on-load]'
})

export class FocusOnLoadDirective implements AfterViewInit{
   
    @Input('focus-on-load') Color:string;

    constructor(private ele:ElementRef,private render:Renderer){
        this.ele.nativeElement.focus();        
    }

    ngAfterViewInit(){
        if(this.Color)
            this.render.setElementStyle(this.ele.nativeElement,'border','1px solid '+this.Color);
    }

}

@Directive({
    selector:'[focused]'    
})

export class FocusedDirective implements OnChanges , AfterViewInit{
    
    private istrigger = false;
    @Input('focused') isFocus:any;   
    @Output() focusedChange = new EventEmitter<any>(); 
    @Output() IsFocusChange = new EventEmitter();
    
    constructor(private ele:ElementRef,private render:Renderer){

    }

    @HostListener('blur',['$event.target'])
    onBlur(ele){      
        this.isFocus = false;  
        this.focusedChange.emit(this.isFocus);         
        this.IsFocusChange.next(this.isFocus);        
        this.istrigger = true;           
    }

    @HostListener('focus',['$event.target'])
    onFocus(ele){     
        if(!this.isFocus){
            this.focusedChange.emit(this.isFocus); 
            this.isFocus = true;  
            this.IsFocusChange.next(this.isFocus);         
        }
    }

    ngOnChanges(changes){
       if(this.isFocus){
            this.ele.nativeElement.focus();
            this.IsFocusChange.next(this.isFocus);
        }
        else{
            if(this.istrigger==false){
                this.ele.nativeElement.blur();
                this.IsFocusChange.next(this.isFocus);
                this.istrigger = true;
            }
            this.istrigger = false;
        }
    }
    
    ngAfterViewInit(){
        if(this.isFocus){
            this.ele.nativeElement.focus();            
        }
        else{
            this.ele.nativeElement.blur();           
        }
    }    

}

@Directive({
    selector:'[ellipses]'
})
export class RgMultilineEllipses implements AfterViewInit,AfterViewChecked{

   @Input('ellipses') NoOfLines:any; 
    elementheight:number = 0;
    lineheight:number = 0;
    maxlines:number = 0;
    chunkno:number = 0;
    preferredHeight:number = 0;
    truncatedHeight:number = 0;
    originalData:string;
    truncatedData:string = "";
    datachunks:string[] = [];
    
    constructor(private ele:ElementRef,private render:Renderer){             

    }

  ngAfterViewInit(){
       this.originalData = this.ele.nativeElement.innerText;
        this.elementHeight();
        this.getLineHeight();
        this.getMaxLines();
        this.getPrefferedHeight();
        this.SpliData();
        this.EllipsesData();
        this.setEllipses();
        this.truncatedHeight = this.elementheight;
        this.chunkno = this.datachunks.length;
  }

ngAfterViewChecked(){
    console.log(this.ele.nativeElement.style.lineHeight);
}


    setElementHeight(){
        this.render.setElementStyle(this.ele,'height',this.preferredHeight.toString());
    }

    getPrefferedHeight(){
        this.preferredHeight = Math.max(Math.round(this.NoOfLines * this.lineheight),0);
    }

    getMaxLines(){
        this.maxlines = Math.max(Math.floor(this.elementheight/this.lineheight),0);
    }

    getLineHeight(){

    }

    getProp(prop){
        
    }

    elementHeight(){

    }

    SpliData(){

    }

    setEllipses(){

    }

    EllipsesData(){

    }

}
