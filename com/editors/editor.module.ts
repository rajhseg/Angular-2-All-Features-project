import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadioButtonComponent, CheckBoxComponent } from './web.controls'
import { StarRatingComponent } from './ratingcontrol';

@NgModule({
    imports:[CommonModule],
    declarations:[StarRatingComponent, RadioButtonComponent, CheckBoxComponent],
    providers:[],
    exports:[StarRatingComponent, RadioButtonComponent, CheckBoxComponent]
})
export class EditorModule{

}