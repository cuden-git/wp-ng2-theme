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
var SiteHeaderComponent = (function () {
    function SiteHeaderComponent(_siteVars) {
        this._siteVars = _siteVars;
    }
    SiteHeaderComponent.prototype.ngOnInit = function () {
        // alert(this._siteVars._varsObj['address']);
        console.log('the addressopop = ' + this._siteVars._varsObj.address);
        // this._siteVars.getVars()
        // .then(items => {
        //     console.log(items);
        // });
    };
    SiteHeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '#header',
            templateUrl: "site-header.component.html?v=" + new Date().getTime()
        }), 
        __metadata('design:paramtypes', [site_vars_service_1.SiteVarsService])
    ], SiteHeaderComponent);
    return SiteHeaderComponent;
}());
exports.SiteHeaderComponent = SiteHeaderComponent;
//# sourceMappingURL=site-header.component.js.map