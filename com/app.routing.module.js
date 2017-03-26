"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var editor_module_1 = require('./editors/editor.module');
var news_component_1 = require('./news.component');
var web_component_1 = require('./Component/web.component');
var print_component_1 = require('./Component/print.component');
var app_component_1 = require('./app.component');
var unknown_component_1 = require('./unknown.component');
var routes = [
    { path: 'rating', component: web_component_1.webformComponent },
    { path: 'news', component: news_component_1.NewsComponent },
    // { path: '', component:webformComponent,pathMatch:'full' },
    { path: '', redirectTo: '/rating', pathMatch: 'full' },
    { path: '**', component: unknown_component_1.UnknownComponent }
];
exports.routedComponents = [app_component_1.AppComponent, web_component_1.webformComponent, news_component_1.NewsComponent, print_component_1.PrintComponent, unknown_component_1.UnknownComponent];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, editor_module_1.EditorModule, router_1.RouterModule.forRoot(routes)],
            declarations: exports.routedComponents,
            exports: [router_1.RouterModule, editor_module_1.EditorModule, common_1.CommonModule],
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routing.module.js.map