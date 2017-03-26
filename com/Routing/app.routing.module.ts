import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EditorModule  } from '../editors/editor.module';
import { FormsModule } from '@angular/forms'
import { NewsComponent } from '../News/news.component';
import { webformComponent } from '../Component/web.component';
import { LoginComponent } from './../Login/login.component';
import { SignUpComponent } from '../SignUp/signup.component';
import { PrintComponent } from '../Component/print.component';
import { AppComponent } from '../app.component';
import { UnknownComponent } from'./unknown.component'

import { DashboardResolve } from '../common/resolves/dashboard.resolve';
import { AuthGuard } from '../common/guards/auth.guard';
import { DataService } from '../common/services/data.service';
import { UserStoreService } from '../common/services/user-store.service';
import { ApiService } from '../common/services/api.service';

import { BorderSelectDirective } from '../directives/border-select';
import { rgClassDirective } from '../directives/rgClass';
import { ntimesDirective } from '../directives/ntimes';

const routes: Routes = [
  { path: 'rating', component: webformComponent },
  { path: 'news',component:NewsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  //{ path: '', component:webformComponent,pathMatch:'full' },
   { path: '', redirectTo:'/rating',pathMatch:'full' },
  { path: '**', component:UnknownComponent }
];

export const appRoutingProviders: any[] = [
    AuthGuard,
    DashboardResolve,
    DataService,
    UserStoreService,
    ApiService
];

export const routedComponents = [AppComponent, webformComponent,NewsComponent,PrintComponent,UnknownComponent,
LoginComponent,SignUpComponent,BorderSelectDirective,rgClassDirective,ntimesDirective];

@NgModule({
  imports : [CommonModule,FormsModule, EditorModule, RouterModule.forRoot(routes)],
  declarations:routedComponents,
  exports: [RouterModule,EditorModule,CommonModule],
  providers:[appRoutingProviders]
})

export class AppRoutingModule { }

