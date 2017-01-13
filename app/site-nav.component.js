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
var site_nav_service_1 = require('./site-nav.service');
var SiteNavComponent = (function () {
    function SiteNavComponent(_siteNav) {
        this._siteNav = _siteNav;
        this.navItems = this._siteNav.siteNav;
    }
    SiteNavComponent.prototype.ngOnInit = function () {
        // console.log('from SiteNavComponent class = ' + this._siteNav.siteNav)
        // this._siteNav.getNav()
        // .then(items=> {
        //     console.log(items);
        //     this.navItems = items;
        // });
    };
    SiteNavComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '[id=navBar]',
            // templateUrl: 'site-nav.component.html'
            templateUrl: "site-nav.component.html?v=" + new Date().getTime(),
        }), 
        __metadata('design:paramtypes', [site_nav_service_1.SiteNavService])
    ], SiteNavComponent);
    return SiteNavComponent;
}());
exports.SiteNavComponent = SiteNavComponent;
//# sourceMappingURL=site-nav.component.js.map