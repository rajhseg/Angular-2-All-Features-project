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
var FormComponent = (function () {
    function FormComponent() {
        this.userfocus = true;
        this.passfocus = false;
    }
    FormComponent.prototype.PasswordFocus = function () {
        this.userfocus = false;
        this.passfocus = true;
    };
    FormComponent.prototype.UserNameFocus = function () {
        this.passfocus = false;
        this.userfocus = true;
    };
    FormComponent.prototype.focusChanged = function (value) {
        console.log("focus is changed " + value);
    };
    FormComponent.prototype.isFancy = function () {
        return this.userfocus;
    };
    FormComponent.prototype.setuserClass = function () {
        var cssclass = {
            fancy: this.userfocus,
            dark: this.userfocus
        };
        return cssclass;
    };
    FormComponent = __decorate([
        core_1.Component({
            selector: 'myform',
            templateUrl: 'com/Forms/forms.html',
            styles: ["\n         \n         .fancy {\n             color:lightblue;\n         }\n\n         .dark{\n             font-weight:bold;\n         }\n\n         .expand{\n            position:relative;\n            animation: expand 1s;\n            animation-duration:1s;\n         }\n\n         .normal{\n            position:relative;\n            animation: expand 1s;\n            animation-duration:1s;\n         }\n\n        @keyframes normal{\n             0% { width:150%; }           \n             100% { width:100%;}\n        }\n\n         @keyframes expand{\n             0% { width:100%; }            \n             100% { width:150%;}\n         }\n\n        "]
        }), 
        __metadata('design:paramtypes', [])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map