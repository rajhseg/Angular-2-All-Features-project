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
var router_1 = require('@angular/router');
var data_service_1 = require('../DataSource/data.service');
var EmployeeDetailComponent = (function () {
    function EmployeeDetailComponent(_router, _route, _dataservice) {
        this._router = _router;
        this._route = _route;
        this._dataservice = _dataservice;
        this.id = '';
        this.Album = null;
    }
    EmployeeDetailComponent.prototype.Back = function () {
        this._router.navigate(['/employee']);
    };
    EmployeeDetailComponent.prototype.ngOnInit = function () {
        var id = +this._route.snapshot.params["id"];
        this.id += ":" + id;
        this.Album = this._route.snapshot.data['userinfo'][0];
        //  this._dataservice.getAlbums(id)
        //     .subscribe(
        //           album=>this.Album = album [0]
        //     );
    };
    EmployeeDetailComponent = __decorate([
        core_1.Component({
            template: "\n    <div class=\"panel panel-primary\" [style.width.px]=\"400\">    \n        <div class=\"panel-heading\">        \n            Employee ID {{id}}\n        </div>\n        <div class=\"panel-body\">\n            <div *ngIf=\"Album\">\n                <ul class=\"list-group\">\n                <li class=\"list-group-item\">\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading text-info\">{{Album.title}}</div>\n                        <div class=\"panel-body\">                                              \n                            <div [style.width.px]=\"150\" [style.height.px]=\"150\" [style.background]=\"Album.thumbnailUrl\"></div>\n                        </div>\n                        <div class=\"panel-footer\">\n                            <a class=\"btn btn-default\" (click)=\"Back()\" [style.width.px]=\"80\">\n                                <i class=\"glyphicon glyphicon-chevron-left\"></i>Back\n                            </a>\n                        </div>\n                    </div>\n                </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, data_service_1.DataService])
    ], EmployeeDetailComponent);
    return EmployeeDetailComponent;
}());
exports.EmployeeDetailComponent = EmployeeDetailComponent;
//# sourceMappingURL=employee.detail.js.map