/**
 * Created by andrew on 3/3/17.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var ReflectionsService = (function () {
    function ReflectionsService(http) {
        this.http = http;
        this.API_URL = 'http://localhost:8080/v1';
        this.USER_URL = this.API_URL + '/user';
        this.gokSession = "";
        this.gidToken = "";
        this.SET_AUTH = "Set-Authorization";
        this.AUTH = "Authorization";
        this.authHeader = new http_1.Headers();
    }
    ReflectionsService.prototype.getUser = function (id) {
        return this.http.get(this.USER_URL + '/' + id)
            .map(function (res) { return res.json(); });
    };
    ReflectionsService.prototype.saveUser = function (user) {
        if (user.id === 0) {
            return this.http.post(this.USER_URL, user)
                .map(function (res) { return res.json(); });
        }
        else {
            return this.http.put(this.USER_URL + '/' + user.id, user)
                .map(function (res) { return res.json(); });
        }
    };
    ReflectionsService.prototype.deleteUser = function (user) {
        return this.http.delete(this.USER_URL + '/' + user.id)
            .map(function (res) { return user; });
    };
    ReflectionsService.prototype.setToken = function (token) { this.gidToken = token; };
    ReflectionsService.prototype.isSignedIn = function () { return (this.gidToken != ""); };
    ReflectionsService.prototype.setSession = function (session) {
        this.gokSession = session;
        this.authHeader.append(this.AUTH, session);
    };
    ReflectionsService.prototype.postToServer = function (subpath, str) { return this.http.post(this.API_URL + subpath, str); };
    ReflectionsService.prototype.getFromServer = function (subpath) {
        var options = new http_1.RequestOptions({ headers: this.authHeader });
        return this.http.get(this.API_URL + subpath, options);
    };
    ReflectionsService.prototype.authorise = function () { return this.postToServer('/client/auth', this.gidToken); };
    ReflectionsService.prototype.profile = function () { return this.getFromServer('/client/profile'); };
    ReflectionsService.prototype.getProfile = function () {
        var _this = this;
        if (this.gokSession == "") {
            console.log("No session string, authenticating with GoingOK server...");
            this.authorise().subscribe(function (response) {
                if (response.headers.has(_this.SET_AUTH)) {
                    _this.setSession(response.headers.get(_this.SET_AUTH));
                    console.log("Session set to: " + _this.gokSession);
                    _this.profile().subscribe(function (res) {
                        return console.log(res.json());
                    }
                    //data => console.log("data: "+data..toString())
                    );
                    return true;
                }
                else {
                    return false;
                }
            });
        }
        else {
            console.log("Already authenticated, fetching profile...");
            return this.profile().subscribe(function (data) { return console.log("data: " + data.toString()); });
            //return false;
        }
    };
    return ReflectionsService;
}());
ReflectionsService = __decorate([
    core_1.Injectable()
], ReflectionsService);
exports.ReflectionsService = ReflectionsService;
