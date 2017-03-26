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
var data_service_1 = require('../DataSource/data.service');
var EmployeesComponent = (function () {
    function EmployeesComponent(dataservice) {
        this.dataservice = dataservice;
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        this.getEmployee();
    };
    EmployeesComponent.prototype.addEmployee = function (employeeName) {
        this.dataservice.addEmployee(employeeName);
    };
    EmployeesComponent.prototype.getEmployee = function () {
        var _this = this;
        this.dataservice.getEmployees()
            .subscribe(function (customer) { return _this.employees = customer; }, function (error) { return console.log("error" + error); });
    };
    EmployeesComponent.prototype.EnableStyle = function (i) {
        if (i % 2 == 0) {
            return true;
        }
    };
    EmployeesComponent = __decorate([
        core_1.Component({
            selector: 'employees',
            template: "\n    <div style=\"display:inline-block;width:400px;vertical-align:top\">      \n        <br/>\n        <div class=\"container text-primary\"><b>Filter by Name</b> \n            <input type=\"text\" \n                [ngModel]=\"emp\" (ngModelChange)=\"emp=$event\" /> </div>\n        <br/>       \n        <div>              \n        <table class=\"table table-bordered table-hover\" [style.width.px]=\"700\">\n            <thead>\n                <tr class=\"text-info\">\n                    <th>User Name</th>\n                    <th>Name</th>\n                    <th>City</th>\n                    <th>ZipCode</th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr [class.info]=\"EnableStyle(i)\" *ngFor=\"let e of employees| employeeFilter:emp;let i=index\" >\n                    <td>{{e.username}}</td>\n                    <td>{{e.name}}</td>\n                    <td>{{e.address.city}}</td>\n                    <td>{{e.address.zipcode}}</td>\n                    <td><a class=\"btn btn-sm btn-success\" [routerLink]=\"['/employee',e.id]\">Detail info</a></td>\n                </tr>\n            </tbody>\n        </table>\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], EmployeesComponent);
    return EmployeesComponent;
}());
exports.EmployeesComponent = EmployeesComponent;
//# sourceMappingURL=employees.component.js.map