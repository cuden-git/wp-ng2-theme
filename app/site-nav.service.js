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
//import { Observable } from 'rxjs/Rx';
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
var app_module_1 = require('./app.module');
// import { HomeComponent } from './home/home.component';
// import { NotFoundComponent } from './not-found.component';
// import { ServicesComponent } from './services.component';
var SiteNavService = (function () {
    function SiteNavService(_http) {
        this._http = _http;
        this._navUrl = wpJsVars.ajaxUrl + '?action=ajax_site_nav';
        this.siteRoutes = [];
    }
    SiteNavService.prototype.getNav = function () {
        var _this = this;
        //alert('getNav()');
        return this._http.get(this._navUrl)
            .map(function (res) {
            console.log(res.json());
            _this.siteNav = res.json();
            //alert('here');
            _this.createRoutes();
            return res.json();
        })
            .toPromise();
    };
    SiteNavService.prototype.createRoutes = function () {
        var appMod = new app_module_1.AppModule();
        console.log(appMod);
        for (var i = 0; i < this.siteNav.length; i++) {
            for (var key in this.siteNav[i]) {
                if (key === 'top') {
                    var componentName = this.siteNav[i].top.ngTemplate;
                    // alert('componentName = ' + componentName);
                    this.siteRoutes.push({
                        path: this.siteNav[i].top.slug,
                        component: componentName,
                        data: { postId: this.siteNav[i].top.postId }
                    });
                }
            }
        }
        console.log('site routes = ');
        console.log(this.siteRoutes);
    };
    SiteNavService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SiteNavService);
    return SiteNavService;
}());
exports.SiteNavService = SiteNavService;
//# sourceMappingURL=site-nav.service.js.map