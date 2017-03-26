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
var PrintComponent = (function () {
    function PrintComponent(ele) {
        this.ele = ele;
        this.sectionChange = new core_1.EventEmitter();
        if (this.section === undefined)
            this.section = '';
    }
    PrintComponent.prototype.ngOnChanges = function (changes) {
        if (changes.section && changes.section.currentValue !== undefined && changes.section.currentValue !== '') {
        }
    };
    PrintComponent.prototype.afterPrint = function () {
        console.log("after print");
        this.ele.nativeElement.children[0].innerHTML = '';
        this.sectionChange.emit('');
        this.section = '';
    };
    PrintComponent.prototype.printDiv = function () {
        if (this.section && this.section != undefined && this.section != '') {
            var printContents = document.getElementById(this.section).innerHTML;
            var originalContents = document.body.innerHTML;
            if (window) {
                if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
                    var popup = window.open('', '_blank', 'width=600,height=600,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
                    popup.window.focus();
                    popup.document.write('<!DOCTYPE html><html><head>  '
                        + '<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css" media="screen,print">'
                        + '<link rel="stylesheet" href="style.css" media="screen,print">'
                        + '</head><body onload="window.print()"><div class="reward-body">' + printContents + '</div></html>');
                    popup.onbeforeunload = function (event) {
                        popup.close();
                        return '.\n';
                    };
                    popup.onabort = function (event) {
                        popup.document.close();
                        popup.close();
                    };
                }
                else {
                    var popup = window.open('', '_blank', 'width=800,height=600');
                    popup.document.open();
                    popup.document.write('<html><head>' +
                        +'<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css" media="all">'
                        + '<link rel="stylesheet" href="style.css" media="all">'
                        + '</head><body onload="window.print()">' + printContents + '</html>');
                    popup.document.close();
                }
                popup.document.close();
            }
            return true;
        }
    };
    PrintComponent.prototype.fetchStylesheets = function () {
        var output = '';
        for (var i = 0; i < document.styleSheets.length; i++) {
            output = output + ' <link rel="stylesheet" type="text/css" href="' +
                window.document.styleSheets[0].href + '" /> ';
        }
        return output;
    };
    PrintComponent.prototype.fetchscriptSheets = function () {
        var output = '';
        for (var i = 0; i < document.scripts.length; i++) {
            output = output + ' <script type="text/javascript" src="' +
                window.document.scripts[0].src + '" /> ';
        }
        return output;
    };
    __decorate([
        core_1.Input('section'), 
        __metadata('design:type', String)
    ], PrintComponent.prototype, "section", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PrintComponent.prototype, "sectionChange", void 0);
    PrintComponent = __decorate([
        core_1.Component({
            selector: 'print-page',
            encapsulation: core_1.ViewEncapsulation.None,
            template: "\n     <button (click)=\"printDiv()\" class=\"btn btn-sm btn-primary\">Print</button>\n     <div id=\"printpage\">\n     </div>\n    ",
            styles: ["\n    @media screen {\n        #printpage, #printpage * {\n            display:none;\n        }\n    }\n      @media print {\n          body *{\n              visibility:hidden;\n              background: transparent;\n            -webkit-print-color-adjust: exact !important; \n          }\n          \n          #printpage, #printpage *{\n              visibility:visible;\n               -webkit-print-color-adjust: exact !important; \n                box-shadow: inset 0 0 0 1000px gold;\n          }\n\n          #printpage{\n            position:absolute;\n            left:0;\n            top:0;             \n          }\n      }\n    "]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], PrintComponent);
    return PrintComponent;
}());
exports.PrintComponent = PrintComponent;
//# sourceMappingURL=print.component.js.map