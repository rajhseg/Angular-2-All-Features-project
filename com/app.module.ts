    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { FormsModule } from '@angular/forms';
    import { HttpModule } from '@angular/http';
        
    import { FocusedDirective } from './directives/onload.directive';
    import { FocusOnLoadDirective,RgMultilineEllipses } from './directives/onload.directive';
    import { FormComponent } from './Forms/form.component';
  
    import { AppLoadComponent } from './app.load.component'
    
    import { DataService } from './DataSource/data.service';
    import { AppRoutingModule } from './Routing/app.routing.module'
    import { UserRoutingModule } from './Routing/user.routing.module';
  
    @NgModule({
        imports: [BrowserModule,HttpModule,UserRoutingModule,AppRoutingModule],
        exports: [],
        declarations: [AppLoadComponent,FormComponent,FocusedDirective,RgMultilineEllipses],
        providers:[DataService],
        bootstrap:[AppLoadComponent]
    })
    export class AppModule { 

    }



