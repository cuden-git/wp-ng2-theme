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
var router_1 = require('@angular/router');
var carousel_service_1 = require('../carousel.service');
var post_meta_service_1 = require('../post-meta.service');
var HomePanel = (function () {
    function HomePanel(_http, _carousel, _postMeta, _activeRoute) {
        this._http = _http;
        this._carousel = _carousel;
        this._postMeta = _postMeta;
        this._activeRoute = _activeRoute;
        //  this._ajaxURL = wpJsVars.ajaxUrl+'?action=ajax_site_nav?carouselId=234';
        //  console.log(this._ajaxURL);
        //  alert(this._ajaxURL);
    }
    HomePanel.prototype.ngOnInit = function () {
        var _this = this;
        alert(this._activeRoute.snapshot.data.postId);
        this._postMeta.getMetaData()
            .subscribe(function (data) {
            alert('bebotzanni con-fantani' + data);
        });
        this._carousel.getCarousel(234)
            .subscribe(function (data) {
            _this.carouselItems = data;
            console.log('Homepanel carousel service');
            console.log(data);
            console.log('Homepanel constructor');
            console.log(_this.carouselItems);
        });
    };
    HomePanel = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '[id=homeCarousel]',
            templateUrl: "home-panel.component.html?v=" + new Date().getTime()
        }), 
        __metadata('design:paramtypes', [http_1.Http, carousel_service_1.CarouselService, post_meta_service_1.PostMetaService, router_1.ActivatedRoute])
    ], HomePanel);
    return HomePanel;
}());
exports.HomePanel = HomePanel;
//# sourceMappingURL=home-panel.component.js.map