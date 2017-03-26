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
var AppComponent = (function () {
    function AppComponent() {
        this.rating = 3;
        this.rating2 = 2;
        this.max = 5;
        this.starcolor = "red";
        this.readonly = false;
        this.fillcolor = "red";
    }
    AppComponent.prototype.ratingChanged = function (value) {
        console.log("OnRating change Callback");
        console.log(this.rating);
        console.log(value);
        console.log("");
    };
    AppComponent.prototype.PrintValue = function () {
        console.log("Values of Ratings");
        console.log("Rating :" + this.rating);
        console.log("Rating1 :" + this.rating2);
        console.log("");
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "    \n    \n    <span style=\"font-size:18px;\">Rajesh G an Architect :</span>  \n    <star-rating    ratingvalue=\"4\"     max=\"10\" \n                    color=\"gray\"        fillcolor=\"orange\" \n                    readonly=\"false\"    (OnRatingChanged)=\"ratingChanged($event)\" >\n    </star-rating>\n\n    <br/>\n    <span style=\"font-size:18px;\">Tamil Movie rate it :</span>\n    <star-rating    [(ratingvalue)]=\"rating\"  [max]=\"max\" \n                    [color]=\"starcolor\"     [readonly]=\"readonly\" \n                    [fillcolor]=\"fillcolor\" (OnRatingChanged)=\"ratingChanged($event)\" >\n    </star-rating>\n\n    <br/>\n     <span style=\"font-size:18px;\">Indian Cricket Team :</span>\n    <star-rating    [(ratingvalue)]=\"rating2\"   max=\"5\" color=\"blue\" fillcolor=\"blue\">\n    </star-rating>\n\n    <br/>\n     <span style=\"font-size:18px;\">Microsoft Bug :</span>\n    <star-rating    ratingvalue=\"2\"   max=\"5\" color=\"green\" fillcolor=\"green\">\n    </star-rating>\n\n    \n    <div>\n    <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"PrintValue()\">\n        Print Values\n    </button>\n    </div>\n\n    ",
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map