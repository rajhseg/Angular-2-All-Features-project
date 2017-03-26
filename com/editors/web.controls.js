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
var CheckBoxComponent = (function () {
    function CheckBoxComponent(ele) {
        this.ele = ele;
        console.log(this.type);
    }
    CheckBoxComponent.prototype.ngOnInit = function () {
        console.log(this.type);
    };
    CheckBoxComponent.prototype.checked = function (value) {
        console.log(value);
    };
    __decorate([
        core_1.Input('label'), 
        __metadata('design:type', String)
    ], CheckBoxComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input('type'), 
        __metadata('design:type', String)
    ], CheckBoxComponent.prototype, "type", void 0);
    CheckBoxComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'checkbox',
            template: "\n    <div [ngSwitch]=\"type\" style=\"display:inline-block\">\n        <div *ngSwitchCase=\"'fancy1'\">    \n            <input name=\"Rcheckbox1\" id=\"Rcheckbox1\" class=\"checkcontrol\"  type=\"checkbox\" checked>\n            <label for=\"Rcheckbox1\" class=\"checkcontrol-label text-muted\">{{label}}</label>    \n        </div>\n        <div *ngSwitchCase=\"'fancy2' \">\n            <input name=\"Rcheckbox2\" id=\"Rcheckbox2\" class=\"checkcontrol\" type=\"checkbox\" checked>\n            <label for=\"Rcheckbox2\" class=\"checkcontrol-label text-muted\">{{label}}</label>\n        </div>\n        <div *ngSwitchCase=\"'fancy3'\">   \n        <div style=\"display:inline-block\">         \n            <label class=\"fancycheck fancycheckbox text-muted\">{{label}}\n                <input type=\"checkbox\" checked=\"checked\"/>\n                <div class=\"fancydraw\"></div>\n            </label>  \n        </div>               \n        </div>\n        <div *ngSwitchDefault>   \n            <input id=\"Rcheckbox4\" #check class=\"\" name=\"Rcheckbox4\" type=\"checkbox\" checked>\n            <label for=\"Rcheckbox4\" class=\"Rcheckbox-label text-muted commonEditor\">{{label}}</label>\n        </div>\n    </div>\n ",
            styleUrls: ['web.controls.css'],
            styles: ["\n\n   .commonEditor{\n        font-size:20px;\n        font-weight:400\n     }\n\n    #Rcheckbox1:checked + .checkcontrol-label:before {\n        background: #2aa1c0;\n    }\n\n   #Rcheckbox2:checked + .checkcontrol-label:before {\n        background: #2aa1c0;\n        box-shadow: inset 0px 0px 0px 4px #fff;\n    }\n    \n   .fancycheck input:checked ~ .fancydraw {\n        background: #2aa1c0;\n    }\n\n    .fancycheck:hover input:not([disabled]):checked ~ .fancydraw,\n    .fancycheck input:checked:focus ~ .fancydraw {\n        background: #0e647d;\n    }\n\n "],
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], CheckBoxComponent);
    return CheckBoxComponent;
}());
exports.CheckBoxComponent = CheckBoxComponent;
var RadioButtonComponent = (function () {
    function RadioButtonComponent(ele) {
        this.ele = ele;
        this.ischeck = true;
        if (this.name === undefined || this.name === '') {
            this.name = 'editorRadiobox';
        }
    }
    RadioButtonComponent.prototype.ngOnInit = function () {
    };
    RadioButtonComponent.prototype.ngAfterViewInit = function () {
        if (this.color !== undefined && this.color !== '') {
            if (this.type == 'fancy1') {
                jQuery("\n                    <style>#Radiobox1:checked + .radiocontrol-label:before { \n                        background: " + this.color + "!important; \n                        box-shadow: inset 0px 0px 0px 4px #fff;\n                    }</style>\n                ").appendTo('head');
            }
            if (this.type == 'fancy2') {
                jQuery("\n                    <style>#Radiobox2:checked + .radiocontrol-label:before { \n                        background: " + this.color + "!important;                  \n                    }</style>\n                ").appendTo('head');
            }
        }
    };
    RadioButtonComponent.prototype.checked = function (value) {
        console.log(value);
    };
    __decorate([
        core_1.Input('id'), 
        __metadata('design:type', String)
    ], RadioButtonComponent.prototype, "radioId", void 0);
    __decorate([
        core_1.Input('label'), 
        __metadata('design:type', String)
    ], RadioButtonComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input('type'), 
        __metadata('design:type', String)
    ], RadioButtonComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input('color'), 
        __metadata('design:type', String)
    ], RadioButtonComponent.prototype, "color", void 0);
    __decorate([
        core_1.Input('name'), 
        __metadata('design:type', String)
    ], RadioButtonComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input('ischeck'), 
        __metadata('design:type', Boolean)
    ], RadioButtonComponent.prototype, "ischeck", void 0);
    RadioButtonComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'radiobutton',
            template: "\n     <div [ngSwitch]=\"type\" style=\"display:inline-block\">\n        <div *ngSwitchCase=\"'fancy1'\">    \n            <input name=\"{{name}}\" id=\"{{radioId}}\" [attr.value]=\"label\" class=\"radiocontrol radiocontrol1\"  type=\"radio\" checked>\n            <label  [attr.for]=\"radioId\"  class=\"radiocontrol-label text-muted\">{{label}}</label>    \n        </div>\n        <div *ngSwitchCase=\"'fancy2'\">\n            <input name=\"{{name}}\" id=\"{{radioId}}\" [attr.value]=\"label\" class=\"radiocontrol radiocontrol2\" type=\"radio\" >\n            <label  [attr.for]=\"radioId\"  class=\"radiocontrol-label text-muted\">{{label}}</label>\n        </div>             \n        <div *ngSwitchDefault>   \n            <input name=\"{{name}}\" [attr.id]=\"radioId\" [attr.value]=\"label\" type=\"radio\" value=\"{{label}}\">  \n             <label [attr.for]=\"radioId\" class=\"text-muted commonEditor\">{{label}}</label>          \n        </div>\n    </div>\n    ",
            styleUrls: ['web.controls.css'],
            styles: [" \n    \n    .commonEditor{\n        font-size:20px;\n        font-weight:400\n     }\n\n    .radiocontrol1:checked + .radiocontrol-label:before {\n        background: #2aa1c0;\n        box-shadow: inset 0px 0px 0px 4px #fff;\n    }\n\n\n    .radiocontrol2:checked + .radiocontrol-label:before {\n        background: #2aa1c0;\n    }     \n    \n    "],
            host: {
                '[id]': 'id'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], RadioButtonComponent);
    return RadioButtonComponent;
}());
exports.RadioButtonComponent = RadioButtonComponent;
//# sourceMappingURL=web.controls.js.map