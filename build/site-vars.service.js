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
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
var SiteVarsService = (function () {
    function SiteVarsService(_http) {
        this._http = _http;
        this._navUrl = wpJsVars.ajaxUrl + '?action=ajax_site_vars';
    }
    SiteVarsService.prototype.getVars = function () {
        var _this = this;
        return this._http.get(this._navUrl)
            .map(function (res) {
            _this._varsObj = res.json();
            console.log(res.json());
            return res.json();
        })
            .toPromise();
    };
    SiteVarsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SiteVarsService);
    return SiteVarsService;
}());
exports.SiteVarsService = SiteVarsService;
//# sourceMappingURL=site-vars.service.js.map