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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var employees_component_1 = require('./employees.component');
var employee_detail_1 = require('./employee.detail');
var employee_parent_1 = require('./employee.parent');
var employeeDetailGuard_1 = require('./employeeDetailGuard');
var employeeDetailResolve_1 = require('./employeeDetailResolve');
var employeePipe_1 = require('./employeePipe');
exports.route = [
    { path: 'employee',
        component: employee_parent_1.EmployeeParentComponent,
        children: [
            {
                path: '',
                component: employees_component_1.EmployeesComponent
            },
            {
                path: ':id',
                component: employee_detail_1.EmployeeDetailComponent,
                canActivate: [employeeDetailGuard_1.EmployeeDetailGuard],
                resolve: { userinfo: employeeDetailResolve_1.EmployeeResolver }
            }
        ]
    }
];
exports.components = [employee_parent_1.EmployeeParentComponent, employees_component_1.EmployeesComponent, employee_detail_1.EmployeeDetailComponent, employeePipe_1.EmployeeFilterPipe];
exports.modules = [common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule];
var EmployeeRoutingModule = (function () {
    function EmployeeRoutingModule() {
    }
    EmployeeRoutingModule = __decorate([
        core_1.NgModule({
            exports: exports.modules,
            imports: [common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule.forChild(exports.route)],
            declarations: exports.components,
            providers: [employeeDetailGuard_1.EmployeeDetailGuard, employeeDetailResolve_1.EmployeeResolver]
        }), 
        __metadata('design:paramtypes', [])
    ], EmployeeRoutingModule);
    return EmployeeRoutingModule;
}());
exports.EmployeeRoutingModule = EmployeeRoutingModule;
//# sourceMappingURL=employee.routing.js.map