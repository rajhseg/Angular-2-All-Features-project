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
var BorderSelectDirective = (function () {
    function BorderSelectDirective(_ele) {
        this._ele = _ele;
        this.clicked = false;
    }
    BorderSelectDirective.prototype.onDoubleClick = function () {
        if (!this.clicked) {
            this._ele.nativeElement.style.border = "2px solid red";
            this.clicked = true;
        }
        else {
            this._ele.nativeElement.style.border = 'none';
            this.clicked = false;
        }
    };
    BorderSelectDirective = __decorate([
        core_1.Directive({
            selector: '[border-select]',
            host: {
                '(dblclick)': 'onDoubleClick()'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], BorderSelectDirective);
    return BorderSelectDirective;
}());
exports.BorderSelectDirective = BorderSelectDirective;
//# sourceMappingURL=border-select.js.map