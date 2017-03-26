"use strict";
var app_values_1 = require('./app.values');
var base = 'http://localhost:5000/';
exports.urlValues = {
    login: app_values_1.appValues.base + "api/authorize",
    signUp: app_values_1.appValues.base + "api/sign-up",
    getUsers: app_values_1.appValues.base + "api/users",
    getRooms: app_values_1.appValues.base + "api/rooms"
};
//# sourceMappingURL=url.values.js.map