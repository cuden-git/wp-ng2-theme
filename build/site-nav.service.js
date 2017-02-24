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
var app_module_1 = require('./app.module');
var SiteNavService = (function () {
    function SiteNavService(_http) {
        this._http = _http;
        this._navUrl = wpJsVars.ajaxUrl + '?action=ajax_site_nav';
        this.siteRoutes = ['bolo-balie'];
        this.siteNav = {};
        this.componentsArr = [];
        this.getAllComponents();
    }
    SiteNavService.prototype.getNav = function () {
        var _this = this;
        if (this.siteNav.isEmpty()) {
            return this._http.get(this._navUrl)
                .map(function (res) {
                void 0;
                void 0;
                _this.siteNav = res.json();
                return res.json();
            })
                .toPromise();
        }
        else {
            return Rx_1.Observable.of(this.siteNav).toPromise();
        }
    };
    SiteNavService.prototype.createRoutes = function () {
        this.siteRoutes = new Array();
        for (var i = 0; i < this.siteNav.length; i++) {
            for (var key in this.siteNav[i]) {
                if (key === 'top') {
                    var componentName = this.getRouteComponent(this.siteNav[i].top.ngTemplate);
                    this.siteRoutes[i] = {
                        path: this.siteNav[i].top.slug,
                        component: componentName,
                        data: { postId: this.siteNav[i].top.postId }
                    };
                }
            }
        }
        void 0;
        void 0;
        var obs = Rx_1.Observable.of(this.siteRoutes).toPromise();
        void 0;
        void 0;
        void 0;
        void 0;
        return obs;
    };
    SiteNavService.prototype.getRouteComponent = function (componentName) {
        var componentObj;
        var annotations = Reflect.getMetadata('annotations', app_module_1.AppModule);
        void 0;
        void 0;
        var declarations = annotations[0].declarations;
        if (annotations[0].hasOwnProperty('imports')) {
        }
        for (var i = 0; i < declarations.length; ++i) {
            if (declarations[i].name === componentName) {
                componentObj = declarations[i];
                break;
            }
            else {
                componentObj = null;
            }
        }
        return componentObj;
    };
    SiteNavService.prototype.getAllComponents = function () {
        var annotations = Reflect.getMetadata('annotations', app_module_1.AppModule);
        if (annotations[0].hasOwnProperty('declarations')) {
            this.componentsArr = annotations[0].declarations;
            ;
        }
        if (annotations[0].hasOwnProperty('imports')) {
            var imports = annotations[0].imports;
            for (var i = 0; i < imports.length; i++) {
                var impAnnotations = Reflect.getMetadata('annotations', imports[i]);
                if (impAnnotations !== undefined) {
                    if (impAnnotations[0].hasOwnProperty('declarations') && impAnnotations[0].declarations !== undefined) {
                        void 0;
                        void 0;
                        impAnnotations[0].declarations.forEach(function (item) {
                            this.componentsArr.push(item);
                        }.bind(this));
                    }
                }
            }
        }
        void 0;
        void 0;
    };
    SiteNavService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SiteNavService);
    return SiteNavService;
}());
exports.SiteNavService = SiteNavService;
