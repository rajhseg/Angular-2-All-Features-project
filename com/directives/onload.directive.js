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
var FocusOnLoadDirective = (function () {
    function FocusOnLoadDirective(ele, render) {
        this.ele = ele;
        this.render = render;
        this.ele.nativeElement.focus();
    }
    FocusOnLoadDirective.prototype.ngAfterViewInit = function () {
        if (this.Color)
            this.render.setElementStyle(this.ele.nativeElement, 'border', '1px solid ' + this.Color);
    };
    __decorate([
        core_1.Input('focus-on-load'), 
        __metadata('design:type', String)
    ], FocusOnLoadDirective.prototype, "Color", void 0);
    FocusOnLoadDirective = __decorate([
        core_1.Directive({
            selector: '[focus-on-load]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], FocusOnLoadDirective);
    return FocusOnLoadDirective;
}());
exports.FocusOnLoadDirective = FocusOnLoadDirective;
var FocusedDirective = (function () {
    function FocusedDirective(ele, render) {
        this.ele = ele;
        this.render = render;
        this.istrigger = false;
        this.focusedChange = new core_1.EventEmitter();
        this.IsFocusChange = new core_1.EventEmitter();
    }
    FocusedDirective.prototype.onBlur = function (ele) {
        this.isFocus = false;
        this.focusedChange.emit(this.isFocus);
        this.IsFocusChange.next(this.isFocus);
        this.istrigger = true;
    };
    FocusedDirective.prototype.onFocus = function (ele) {
        if (!this.isFocus) {
            this.focusedChange.emit(this.isFocus);
            this.isFocus = true;
            this.IsFocusChange.next(this.isFocus);
        }
    };
    FocusedDirective.prototype.ngOnChanges = function (changes) {
        if (this.isFocus) {
            this.ele.nativeElement.focus();
            this.IsFocusChange.next(this.isFocus);
        }
        else {
            if (this.istrigger == false) {
                this.ele.nativeElement.blur();
                this.IsFocusChange.next(this.isFocus);
                this.istrigger = true;
            }
            this.istrigger = false;
        }
    };
    FocusedDirective.prototype.ngAfterViewInit = function () {
        if (this.isFocus) {
            this.ele.nativeElement.focus();
        }
        else {
            this.ele.nativeElement.blur();
        }
    };
    __decorate([
        core_1.Input('focused'), 
        __metadata('design:type', Object)
    ], FocusedDirective.prototype, "isFocus", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FocusedDirective.prototype, "focusedChange", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FocusedDirective.prototype, "IsFocusChange", void 0);
    __decorate([
        core_1.HostListener('blur', ['$event.target']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], FocusedDirective.prototype, "onBlur", null);
    __decorate([
        core_1.HostListener('focus', ['$event.target']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], FocusedDirective.prototype, "onFocus", null);
    FocusedDirective = __decorate([
        core_1.Directive({
            selector: '[focused]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], FocusedDirective);
    return FocusedDirective;
}());
exports.FocusedDirective = FocusedDirective;
var RgMultilineEllipses = (function () {
    function RgMultilineEllipses(ele, render) {
        this.ele = ele;
        this.render = render;
        this.elementheight = 0;
        this.lineheight = 0;
        this.maxlines = 0;
        this.chunkno = 0;
        this.preferredHeight = 0;
        this.truncatedHeight = 0;
        this.truncatedData = "";
        this.datachunks = [];
    }
    RgMultilineEllipses.prototype.ngAfterViewInit = function () {
        this.originalData = this.ele.nativeElement.innerText;
        this.elementHeight();
        this.getLineHeight();
        this.getMaxLines();
        this.getPrefferedHeight();
        this.SpliData();
        this.EllipsesData();
        this.setEllipses();
        this.truncatedHeight = this.elementheight;
        this.chunkno = this.datachunks.length;
    };
    RgMultilineEllipses.prototype.ngAfterViewChecked = function () {
        console.log(this.ele.nativeElement.style.lineHeight);
    };
    RgMultilineEllipses.prototype.setElementHeight = function () {
        this.render.setElementStyle(this.ele, 'height', this.preferredHeight.toString());
    };
    RgMultilineEllipses.prototype.getPrefferedHeight = function () {
        this.preferredHeight = Math.max(Math.round(this.NoOfLines * this.lineheight), 0);
    };
    RgMultilineEllipses.prototype.getMaxLines = function () {
        this.maxlines = Math.max(Math.floor(this.elementheight / this.lineheight), 0);
    };
    RgMultilineEllipses.prototype.getLineHeight = function () {
    };
    RgMultilineEllipses.prototype.getProp = function (prop) {
    };
    RgMultilineEllipses.prototype.elementHeight = function () {
    };
    RgMultilineEllipses.prototype.SpliData = function () {
    };
    RgMultilineEllipses.prototype.setEllipses = function () {
    };
    RgMultilineEllipses.prototype.EllipsesData = function () {
    };
    __decorate([
        core_1.Input('ellipses'), 
        __metadata('design:type', Object)
    ], RgMultilineEllipses.prototype, "NoOfLines", void 0);
    RgMultilineEllipses = __decorate([
        core_1.Directive({
            selector: '[ellipses]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], RgMultilineEllipses);
    return RgMultilineEllipses;
}());
exports.RgMultilineEllipses = RgMultilineEllipses;
//# sourceMappingURL=onload.directive.js.map