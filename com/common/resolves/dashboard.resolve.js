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
var api_service_1 = require('../services/api.service');
var url_values_1 = require('../config/url.values');
var user_store_service_1 = require('../services/user-store.service');
var data_service_1 = require('../services/data.service');
var DashboardResolve = (function () {
    function DashboardResolve(_api, _userStore, _data, _router) {
        this._api = _api;
        this._userStore = _userStore;
        this._data = _data;
        this._router = _router;
    }
    DashboardResolve.prototype.resolve = function (route) {
        var _this = this;
        return this._api.send(url_values_1.urlValues.getRooms, 'Get').subscribe(function (res) {
            _this._data.loadRooms(res);
            return true;
        }, function (err) {
            _this._router.navigate(['/']);
            _this._userStore.setUser();
            return false;
        });
    };
    DashboardResolve = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [api_service_1.ApiService, user_store_service_1.UserStoreService, data_service_1.DataService, router_1.Router])
    ], DashboardResolve);
    return DashboardResolve;
}());
exports.DashboardResolve = DashboardResolve;
//# sourceMappingURL=dashboard.resolve.js.map