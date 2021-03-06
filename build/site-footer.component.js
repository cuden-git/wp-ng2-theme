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
var site_vars_service_1 = require('./site-vars.service');
var SiteFooterComponent = (function () {
    function SiteFooterComponent(_siteVars) {
        this._siteVars = _siteVars;
        //  alert('message from footer ' + this._siteVars._varsObj.address);
    }
    SiteFooterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '[id=footer]',
            templateUrl: "site-footer.component.html?v=" + new Date().getTime()
        }), 
        __metadata('design:paramtypes', [site_vars_service_1.SiteVarsService])
    ], SiteFooterComponent);
    return SiteFooterComponent;
}());
exports.SiteFooterComponent = SiteFooterComponent;
//# sourceMappingURL=site-footer.component.js.map