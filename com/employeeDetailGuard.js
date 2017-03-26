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
var EmployeeDetailGuard = (function () {
    function EmployeeDetailGuard(_router) {
        this._router = _router;
    }
    EmployeeDetailGuard.prototype.canActivate = function (route) {
        var id = +route.url[0].path;
        if (isNaN(id) || id < 1) {
            alert("invalid Employee");
            this._router.navigate(['/employee']);
            return false;
        }
        return true;
    };
    EmployeeDetailGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], EmployeeDetailGuard);
    return EmployeeDetailGuard;
}());
exports.EmployeeDetailGuard = EmployeeDetailGuard;
//# sourceMappingURL=employeeDetailGuard.js.map