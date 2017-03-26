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
var socket_control_service_1 = require('../services/socket-control.service');
var SocketResolve = (function () {
    function SocketResolve(_socket, _router) {
        this._socket = _socket;
        this._router = _router;
    }
    SocketResolve.prototype.resolve = function (route) {
        var _this = this;
        return this._socket.validate()
            .then(function (_) { return true; })
            .catch(function (_) {
            _this._router.navigate(['/login']);
            return false;
        });
    };
    SocketResolve = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [socket_control_service_1.SocketControlService, router_1.Router])
    ], SocketResolve);
    return SocketResolve;
}());
exports.SocketResolve = SocketResolve;
//# sourceMappingURL=socket.resolve.js.map