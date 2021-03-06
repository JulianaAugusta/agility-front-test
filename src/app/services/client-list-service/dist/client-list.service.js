"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ClientListService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
// import { catchError } from 'rxjs/operators';
var ClientListService = /** @class */ (function () {
    // private handleError: HandleError;
    function ClientListService(http) {
        this.http = http;
        this.clientsUrl = 'https://eagle-backend-staging.somosagility.com.br/getTeste';
        this.httpOptions = {
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    ClientListService.prototype.getAllClientList = function () {
        return this.http.get(this.clientsUrl);
    };
    ClientListService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ClientListService);
    return ClientListService;
}());
exports.ClientListService = ClientListService;
