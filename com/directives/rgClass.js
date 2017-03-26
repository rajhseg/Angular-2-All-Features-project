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
var rgClassDirective = (function () {
    function rgClassDirective(_ele, _render, _iterableDiffers) {
        this._ele = _ele;
        this._render = _render;
        this._iterableDiffers = _iterableDiffers;
        this._baseClass = [];
    }
    rgClassDirective.prototype.ngDoCheck = function () {
    };
    rgClassDirective.prototype.ngOnDestroy = function () {
    };
    rgClassDirective.prototype._applyKeyValueChanges = function (changes) {
        var _this = this;
        changes.forEachAddedItem(function (record) { _this.togglecls(record.key, record.currentValue); });
        changes.forEachChangedItem(function (record) { _this.togglecls(record.key, record.currentValue); });
        changes.forEachRemovedItem(function (record) {
            if (record.previousValue) {
                _this.togglecls(record.key, false);
            }
        });
    };
    rgClassDirective.prototype._applyIterableChanges = function (changes) {
        var _this = this;
        changes.forEachAddedItem(function (record) { _this.togglecls(record.item, true); });
        changes.forEachRemovedItem(function (record) { _this.togglecls(record.item, false); });
    };
    rgClassDirective.prototype._applyInitialClasses = function (isCleanup) {
        var _this = this;
        this._baseClass.forEach(function (className) { return _this.togglecls(className, !isCleanup); });
    };
    rgClassDirective.prototype.togglecls = function (className, enabled) {
        className = className.trim();
        if (className.length > 0) {
            if (className.indexOf(' ') > -1) {
                var clss = className.split(/\s+/g);
                for (var i = 0, len = clss.length; i < len; i++) {
                    this._render.setElementClass(this._ele.nativeElement, clss[i], enabled);
                }
            }
            else {
                this._render.setElementClass(this._ele.nativeElement, className, enabled);
            }
        }
    };
    rgClassDirective = __decorate([
        core_1.Directive({
            selector: '[rgClass]',
            inputs: ['inpClass:rgClass', 'baseClass:class']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers])
    ], rgClassDirective);
    return rgClassDirective;
}());
exports.rgClassDirective = rgClassDirective;
//# sourceMappingURL=rgClass.js.map