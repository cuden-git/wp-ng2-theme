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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var site_nav_service_1 = require('./site-nav.service');
var site_vars_service_1 = require('./site-vars.service');
var post_service_1 = require('./post.service');
var site_header_component_1 = require('./site-header.component');
var site_nav_component_1 = require('./site-nav.component');
var site_footer_component_1 = require('./site-footer.component');
//import { HomeComponent } from './home/home.component';
var home_module_1 = require('./home/home.module');
var services_component_1 = require('./services.component');
var not_found_component_1 = require('./not-found.component');
var app_routing_module_1 = require('./app-routing.module');
var right_col_component_1 = require('./right-col.component');
//import { Reflect } from '../node_modules/reflect-metadata/Reflect';
var AppModule = (function () {
    function AppModule() {
        alert('AppModule');
        console.log('from app module yeah');
        console.log(Reflect);
        console.log('here my dear');
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                app_routing_module_1.AppRouting,
                home_module_1.HomeModule
            ],
            declarations: [app_component_1.AppComponent, site_header_component_1.SiteHeaderComponent, site_nav_component_1.SiteNavComponent, site_footer_component_1.SiteFooterComponent, not_found_component_1.NotFoundComponent, services_component_1.ServicesComponent, right_col_component_1.RightColComponent],
            providers: [site_nav_service_1.SiteNavService, site_vars_service_1.SiteVarsService, post_service_1.PostService, {
                    provide: core_1.APP_INITIALIZER,
                    useFactory: function (config, siteNav) {
                        return function () {
                            return config.getVars(),
                                siteNav.getNav() /**/;
                        };
                    },
                    deps: [site_vars_service_1.SiteVarsService, site_nav_service_1.SiteNavService],
                    multi: true
                }],
            /*exports: [RightColComponent],*/
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map