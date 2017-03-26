import { Directive ,ElementRef, Renderer, Input, OnInit ,
    IterableDiffers,IterableDiffer,
    DoCheck, OnDestroy,KeyValueChangeRecord,CollectionChangeRecord
} from '@angular/core'

import {} from ''

@Directive(
    {
        selector:'[rgClass]',
        inputs:['inpClass:rgClass','baseClass:class']
    }
)
export class rgClassDirective implements  DoCheck, OnDestroy {

    private _iterableDiffer: IterableDiffer;
    private _inpClass:string[]|Set<string>;
    private _baseClass:string[] = [];
    
    constructor(private _ele:ElementRef,private _render:Renderer,private _iterableDiffers: IterableDiffers){

    }

   

    ngDoCheck():void{

    }

    ngOnDestroy():void{

    }


  

  private _applyKeyValueChanges(changes: any): void {
    changes.forEachAddedItem(
        (record: KeyValueChangeRecord) => { this.togglecls(record.key, record.currentValue); });
    changes.forEachChangedItem(
        (record: KeyValueChangeRecord) => { this.togglecls(record.key, record.currentValue); });
    changes.forEachRemovedItem((record: KeyValueChangeRecord) => {
      if (record.previousValue) {
        this.togglecls(record.key, false);
      }
    });
  }

  private _applyIterableChanges(changes: any): void {
    changes.forEachAddedItem(
        (record: CollectionChangeRecord) => { this.togglecls(record.item, true); });
    changes.forEachRemovedItem(
        (record: CollectionChangeRecord) => { this.togglecls(record.item, false); });
  }

  private _applyInitialClasses(isCleanup: boolean) {
    this._baseClass.forEach(className => this.togglecls(className, !isCleanup));
  }



    private togglecls(className:string,enabled:boolean){
        className = className.trim();
        if(className.length>0){
            if(className.indexOf(' ') > -1){
                var clss = className.split(/\s+/g);
                for(var i=0,len = clss.length;i<len;i++){
                    this._render.setElementClass(this._ele.nativeElement,clss[i],enabled);
                }
            }else{
                this._render.setElementClass(this._ele.nativeElement,className,enabled);
            }
        }
    }


}