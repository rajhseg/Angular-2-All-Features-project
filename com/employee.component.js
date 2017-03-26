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
var data_service_1 = require('./data.service');
var EmployeeComponent = (function () {
    function EmployeeComponent(dataservice) {
        this.dataservice = dataservice;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.getEmployee();
    };
    EmployeeComponent.prototype.addEmployee = function (employeeName) {
        this.dataservice.addEmployee(employeeName);
    };
    EmployeeComponent.prototype.getEmployee = function () {
        var _this = this;
        this.dataservice.getEmployees()
            .subscribe(function (customer) { return _this.employees = customer; }, function (error) { return console.log("error" + error); });
    };
    EmployeeComponent.prototype.EnableStyle = function (i) {
        if (i % 2 == 0) {
            return true;
        }
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'employee',
            template: "\n    <div style=\"display:inline-block;width:400px;vertical-align:top\">      \n        <br/>\n        <div class=\"container text-primary\"><b>Filter by Name</b> \n            <input type=\"text\" \n                [ngModel]=\"emp\" (ngModelChange)=\"emp=$event\" /> </div>\n        <br/>       \n        <div>              \n        <table class=\"table table-bordered table-hover\" [style.width.px]=\"700\">\n            <thead>\n                <tr class=\"text-info\">\n                    <th>User Name</th>\n                    <th>Name</th>\n                    <th>City</th>\n                    <th>ZipCode</th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr [class.info]=\"EnableStyle(i)\" *ngFor=\"let e of employees| employeeFilter:emp;let i=index\" >\n                    <td>{{e.username}}</td>\n                    <td>{{e.name}}</td>\n                    <td>{{e.address.city}}</td>\n                    <td>{{e.address.zipcode}}</td>\n                    <td><a class=\"btn btn-sm btn-success\" [routerLink]=\"['/employee',e.id]\">Detail info</a></td>\n                </tr>\n            </tbody>\n        </table>\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof data_service_1.DataService !== 'undefined' && data_service_1.DataService) === 'function' && _a) || Object])
    ], EmployeeComponent);
    return EmployeeComponent;
    var _a;
}());
exports.EmployeeComponent = EmployeeComponent;
var StudentComponent = (function () {
    function StudentComponent(dataservice) {
        this.dataservice = dataservice;
    }
    StudentComponent.prototype.addStudent = function (studentName) {
        this.dataservice.addEmployee(studentName);
    };
    StudentComponent.prototype.getStudents = function () {
        var _this = this;
        this.dataservice.getEmployees().subscribe(function (customer) { return _this.students = customer; }, function (error) { return console.log("error" + error); });
        //this.students = this.dataservice.getEmployees().;
    };
    StudentComponent = __decorate([
        core_1.Component({
            selector: 'student',
            template: "\n    <div style=\"display:inline-block;width:400px;vertical-align:top\">\n        <h1>Student </h1>\n        <div>\n            <input type=\"text\" #std />\n            <button (click)=\"addStudent(std.value)\" class=\"btn btn-sm btn-primary\">Add Student</button>\n            <button (click)=\"getStudents()\" class=\"btn btn-sm btn-primary\">Get Students</button>\n            <div>\n                <ul class=\"list-group\">\n                    <li class=\"panel list-group-item-primary\" *ngFor=\"let s of students\" style=\"list-style:none;\">\n                        \n                    </li>\n                </ul>\n            </div>\n        </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof data_service_1.DataService !== 'undefined' && data_service_1.DataService) === 'function' && _a) || Object])
    ], StudentComponent);
    return StudentComponent;
    var _a;
}());
exports.StudentComponent = StudentComponent;
//# sourceMappingURL=employee.component.js.map