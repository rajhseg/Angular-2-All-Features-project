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
var NewsComponent = (function () {
    function NewsComponent() {
        this.name = "This is a Custom controls and Directive section page";
        this.NoOfTimes = 8;
    }
    NewsComponent = __decorate([
        core_1.Component({
            template: "<h1>{{name}}</h1>\n    <br/>\n    <h3 style=\"color:orange\" border-select>Change border on double click the text , directive name: border-select</h3>\n    <br/>\n    <div>\n      <h4 style=\"color:red\">Custom checkbox controls</h4>\n      <checkbox type=\"fancy2\" label=\"Testing\"></checkbox>\n       <checkbox type=\"fancy1\" label=\"Testing\"></checkbox>\n       <checkbox type=\"dd\" label=\"Testing\"></checkbox>\n    </div>\n    <br/>\n    <div>\n       <h4 style=\"color:red\">Custom Radiobutton controls</h4>\n       <radiobutton id=\"id1\" name=\"eradio\" color=\"orange\" type=\"fancy1\" label=\"Male\"></radiobutton>       \n       <radiobutton id=\"id2\" name=\"eradio\" color=\"red\" type=\"fancy2\" label=\"Female\"></radiobutton>\n       <radiobutton id=\"id3\" name=\"eradio\" label=\"Adult\"></radiobutton>     \n        <br/>\n    </div>\n    <br />\n    <h4 style=\"color:red\">Custom angular class - rgClass</h4>\n       <span rgClass=\"['border','strong']\">Testing rgClasses</span>      \n       <br/>\n    \n    <div>\n    <br/>\n    <h4 style=\"color:red\">Custom Structural Directive - NoOfTimes</h4>\n       <div *ntimes=\"NoOfTimes\">\n          <span>No Of Times directive</span>\n       </div>\n    </div>\n    ",
            encapsulation: core_1.ViewEncapsulation.None,
            styles: ["\n    \n        .border{\n            border:2px solid blue;\n        }\n\n        .strong{\n            font-weight:bold;\n        }\n\n        .light{\n\n        }\n\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], NewsComponent);
    return NewsComponent;
}());
exports.NewsComponent = NewsComponent;
//# sourceMappingURL=news.component.js.map