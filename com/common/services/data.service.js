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
var api_service_1 = require('./api.service');
var Rx_1 = require('rxjs/Rx');
/*
    This service handles getting data that the application requires from the server
    via HTTP requests through the ApiService
 */
var DataService = (function () {
    function DataService(_api) {
        this._api = _api;
        this.rooms = new Rx_1.BehaviorSubject([]);
        this.users = new Rx_1.BehaviorSubject([]);
        this.message = new Rx_1.Subject();
    }
    DataService.prototype.loadRooms = function (rooms) {
        this.rooms.next(rooms);
        this._rooms = rooms;
    };
    DataService.prototype.loadUsers = function (users) {
        var _this = this;
        this.users.next(users);
        this._users = users;
        this._rooms.forEach(function (a) { return a.createdBy = _this._users.find(function (b) { return b._id === a.createdBy; }); });
        this.rooms.next(this._rooms);
    };
    DataService.prototype.addRoom = function (room) {
        this._rooms.push(Object.assign(room, { createdBy: this._users.find(function (a) { return a._id === room.createdBy; }) }));
        this.rooms.next(this._rooms);
    };
    DataService.prototype.removeRoom = function (data) {
        var index = this._rooms.findIndex(function (a) { return a._id === data._id; });
        this._rooms.splice(index, 1);
        this.rooms.next(this._rooms);
    };
    DataService.prototype.createTask = function (data) {
        this._rooms.find(function (a) { return a._id === data.roomId; }).tasks.push(data.task);
        this.rooms.next(this._rooms);
    };
    DataService.prototype.updateTask = function (data) {
        this._rooms.find(function (a) { return a._id === data.roomId; }).tasks.map(function (a) {
            if (a._id === data.task._id)
                a = data.task;
            return a;
        });
        this.rooms.next(this._rooms);
    };
    DataService.prototype.deleteTask = function (data) {
        var roomIndex = this._rooms.findIndex(function (a) { return a._id === data.roomId; }), taskIndex = this._rooms[roomIndex].tasks.findIndex(function (a) { return a._id === data.taskId; });
        this._rooms[roomIndex].tasks = this._rooms[roomIndex].tasks.splice(taskIndex, 1);
        this.rooms.next(this._rooms);
    };
    ;
    DataService.prototype.newMessage = function (message) {
        message.createdBy = this._users.find(function (a) { return a._id === message.createdBy; });
        this.message.next(message);
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [api_service_1.ApiService])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map