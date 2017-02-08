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
var Rx_1 = require('rxjs/Rx');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
var home_module_1 = require('./home/home.module');
// import { HomeComponent } from './home/home.component';
// import { NotFoundComponent } from './not-found.component';
// import { ServicesComponent } from './services.component';
var SiteNavService = (function () {
    function SiteNavService(_http) {
        this._http = _http;
        this._navUrl = wpJsVars.ajaxUrl + '?action=ajax_site_nav';
        alert('SiteNavService');
        this.siteRoutes = ['bolo-balie'];
        this.siteNav = {};
    }
    SiteNavService.prototype.getNav = function () {
        var _this = this;
        alert('getNav()');
        return this._http.get(this._navUrl)
            .map(function (res) {
            console.log(res.json());
            _this.siteNav = res.json();
            alert('getNav() within promise');
            alert('this.siteNav.length = ' + _this.siteNav.length);
            //   this.createRoutes();
            return res.json();
        })
            .toPromise();
    };
    SiteNavService.prototype.createRoutes = function () {
        alert("createRoutes() method form SiteNavService");
        // alert('this.siteNav.length = ' + this.siteNav.length);
        this.siteRoutes = new Array();
        for (var i = 0; i < this.siteNav.length; i++) {
            for (var key in this.siteNav[i]) {
                if (key === 'top') {
                    //var componentName = <Component> this.siteNav[i].top.ngTemplate;
                    var componentName = this.getRouteComponent(this.siteNav[i].top.ngTemplate);
                    // this.siteRoutes.push({
                    //     path: this.siteNav[i].top.slug,
                    //     component: componentName,
                    //     data: {postId: this.siteNav[i].top.postId }
                    // });
                    this.siteRoutes[i] = {
                        path: this.siteNav[i].top.slug,
                        component: componentName,
                        data: { postId: this.siteNav[i].top.postId }
                    };
                }
            }
        }
        //alert('bingo otchoa');
        console.log('site routes = ');
        console.log(this.siteRoutes);
        var obs = Rx_1.Observable.of(this.siteRoutes).toPromise();
        console.log('the observable is = ');
        console.log(obs);
        console.log('console object is = ');
        console.log(console);
        return obs;
        //return this.siteRoutes;
    };
    SiteNavService.prototype.getRouteComponent = function (componentName) {
        var componentObj;
        var annotations = Reflect.getMetadata('annotations', home_module_1.HomeModule);
        //console.log('nav service = ');
        //console.log(annotations);
        var declarations = annotations[0].declarations;
        //alert(declarations.length);
        // let moduleImports = annotations[0].imports;
        for (var i = 0; i < declarations.length; ++i) {
            if (declarations[i].name === componentName) {
                componentObj = declarations[i];
            }
            else {
                componentObj = null;
            }
        }
        // declarations.forEach((arrItem) => {
        //     if(arrItem.name === componentName){
        //         alert("we have a god damned match / " + arrItem);
        //         componentObj =  arrItem;
        //         return false;
        //     }else{
        //         componentObj = null;
        //     }
        // });
        //alert('here' + componentObj);
        return componentObj;
    };
    SiteNavService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SiteNavService);
    return SiteNavService;
}());
exports.SiteNavService = SiteNavService;
//# sourceMappingURL=site-nav.service.js.map