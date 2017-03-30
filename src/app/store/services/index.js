/**
 * Created by andrew on 29/3/17.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import {HTTP_PROVIDERS} from '@angular/http';
var user_service_1 = require("./user.service");
exports.UserService = user_service_1.UserService;
var reflections_service_1 = require("./reflections.service");
exports.ReflectionsService = reflections_service_1.ReflectionsService;
exports.default = [
    //HTTP_PROVIDERS,
    user_service_1.UserService,
    reflections_service_1.ReflectionsService
];
