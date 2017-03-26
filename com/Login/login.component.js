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
var api_service_1 = require('../common/services/api.service');
var user_store_service_1 = require('../common/services/user-store.service');
var url_values_1 = require('../common/config/url.values');
var LoginComponent = (function () {
    function LoginComponent(_router, _userStore, _api) {
        this._router = _router;
        this._userStore = _userStore;
        this._api = _api;
        this.submitted = false;
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this._api.send(url_values_1.urlValues.login, 'Post', { email: this.username, password: this.password }).subscribe(function (res) {
            // Store the user data in local storage
            _this._userStore.setUser(res);
            _this._router.navigate(['/dashboard']);
        }, function (err) {
            // Clean the password
            _this.password = '';
            _this.submitted = false;
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: 'login.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_store_service_1.UserStoreService, api_service_1.ApiService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map