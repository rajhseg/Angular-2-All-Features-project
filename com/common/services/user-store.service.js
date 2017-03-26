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
var app_values_1 = require('../config/app.values');
/*
    This service handles storing and retrieving the user object from local storage
 */
var UserStoreService = (function () {
    function UserStoreService() {
    }
    UserStoreService.prototype.getUser = function () {
        var temp = localStorage.getItem(app_values_1.appValues.name);
        // Parse and return the user string from local storage
        if (temp)
            return JSON.parse(temp);
        else
            return null;
    };
    UserStoreService.prototype.setUser = function (user) {
        // If the user object was provided stringify it and save it to local storage
        if (user)
            localStorage.setItem(app_values_1.appValues.name, JSON.stringify(user));
        else
            localStorage.removeItem(app_values_1.appValues.name);
    };
    UserStoreService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserStoreService);
    return UserStoreService;
}());
exports.UserStoreService = UserStoreService;
//# sourceMappingURL=user-store.service.js.map