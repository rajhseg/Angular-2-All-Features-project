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
var webformComponent = (function () {
    function webformComponent() {
        this.sectiondata = 'sidebar1';
        this.username = "";
        this.password = "";
    }
    webformComponent.prototype.ngPrint = function () {
        console.log("sample");
        this.sectiondata = '';
        this.sectiondata = "sidebar";
    };
    webformComponent.prototype.ngPrint1 = function () {
        console.log("sample1");
        this.sectiondata = '';
        this.sectiondata = "sidebar1";
    };
    __decorate([
        core_1.Input('formaction'), 
        __metadata('design:type', String)
    ], webformComponent.prototype, "formaction", void 0);
    __decorate([
        core_1.Input('formmethod'), 
        __metadata('design:type', String)
    ], webformComponent.prototype, "formmethod", void 0);
    __decorate([
        core_1.Input('redirect'), 
        __metadata('design:type', String)
    ], webformComponent.prototype, "redirect", void 0);
    webformComponent = __decorate([
        core_1.Component({
            selector: 'webform',
            template: "\n    <form name=\"loginform\" class=\"form-group\" id=\"loginform\" action=\"{{formaction}}\" method=\"{{formmethod}}\">        \n         <my-app></my-app>         \n    </form>",
            styles: ["\n        form {\n            display:block;\n            margin-top: 20px;\n            margin-left: 0;\n            padding: 26px 24px 46px;\n            background: #fff;\n            -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.13);\n            box-shadow: 0 1px 3px rgba(0,0,0,.13);\n        }\n\n    form,h1 a {\n        overflow: hidden;\n        font-weight: 400;\n    }\n    .forget {\n        font-weight: 400;\n        float: left;\n        margin-bottom: 0;\n    }\n    .input{        \n        border: 1px solid #ddd;\n        -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,.07);\n        box-shadow: inset 0 1px 2px rgba(0,0,0,.07);\n        background-color: #fff;\n        color: #32373c;\n        outline: 0;\n        -webkit-transition: 50ms border-color ease-in-out;\n        transition: 50ms border-color ease-in-out;\n    }\n\n    "],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], webformComponent);
    return webformComponent;
}());
exports.webformComponent = webformComponent;
//# sourceMappingURL=web.component.js.map