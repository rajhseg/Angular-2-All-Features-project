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
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
/*
    This service handles all HTTP requests to the server. Handling all
    requests through one service provides a simple way to append headers to all requests
    with out extending angular 2's Http class
 */
var ApiService = (function () {
    function ApiService(_http) {
        this._http = _http;
    }
    ApiService.prototype.send = function (url, type, item, id) {
        // Define the options for the request
        var options = {
            method: http_1.RequestMethod[type],
            url: url,
            body: '',
            headers: new http_1.Headers({
                'Content-Type': 'application/json'
            })
        };
        // If the passed item is a string use it
        // Otherwise json stringify it
        if (item)
            options.body = typeof item === 'string' ? item : JSON.stringify(item);
        return this._http.request(new http_1.Request(options))
            .map(function (res) { return res.json().data; })
            .catch(function (err) { return Rx_1.Observable.throw(err); });
    };
    ApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map