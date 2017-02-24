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
var router_1 = require('@angular/router');
var site_nav_service_1 = require('./site-nav.service');
var home_component_1 = require('./home/home.component');
var not_found_component_1 = require('./not-found.component');
var services_component_1 = require('./services.component');
var routes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'services',
        component: services_component_1.ServicesComponent,
        data: { postId: 9 }
    },
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: '**',
        component: not_found_component_1.NotFoundComponent
    }
];
void 0;
void 0;
var AppRouting = (function () {
    function AppRouting(router, siteNav) {
        var _this = this;
        this.router = router;
        this.siteNav = siteNav;
        this.siteNav.getNav()
            .then(function (data) {
            _this.lateRoutes = _this.siteNav.createRoutes()
                .then(function (data) { _this.router.resetConfig(data.concat(routes)); });
        });
    }
    AppRouting.prototype.ngOnInit = function () {
    };
    AppRouting = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [router_1.Router, site_nav_service_1.SiteNavService])
    ], AppRouting);
    return AppRouting;
}());
exports.AppRouting = AppRouting;
