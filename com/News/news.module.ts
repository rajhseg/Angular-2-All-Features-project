import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NewsComponent } from'./news.component'

@NgModule({
    imports:[BrowserModule],
    exports:[],
    declarations:[NewsComponent],
    bootstrap:[NewsComponent]
})

export class NewsModule{
    
}