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
var router_animations_1 = require('./router.animations');
var post_service_1 = require('./post.service');
var ServicesComponent = (function () {
    function ServicesComponent(_activeRoute, _posts /*,private _siteNav: SiteNavService*/) {
        this._activeRoute = _activeRoute;
        this._posts = _posts;
        this.routeAnimation = true;
        this.class = "component";
        this.postId = this._activeRoute.snapshot.data.postId;
        console.log('post id = ' + this._activeRoute.snapshot.data.postId);
    }
    ServicesComponent.prototype.ngOnInit = function () {
        //console.log(this._siteNav.siteNav);
        // this._posts.getPost(this.postId)
        // .then(posts => {
        //     console.log(posts);
        // });
        // this.postId = this._activeRoute.data.map(data => data);
        // console.log(this.postId.destination._value);
        // alert(this.postId.destination._value);
        // alert('services enter');
    };
    ServicesComponent.prototype.ngOnDestroy = function () {
        //alert('services leave');
    };
    __decorate([
        core_1.HostBinding('@routerTransition'), 
        __metadata('design:type', Object)
    ], ServicesComponent.prototype, "routeAnimation", void 0);
    __decorate([
        core_1.HostBinding('class'), 
        __metadata('design:type', Object)
    ], ServicesComponent.prototype, "class", void 0);
    ServicesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "services.component.html?v=" + new Date().getTime(),
            animations: [router_animations_1.routerTransition] /*,
            host: {'[@routerTransition]': ''}*/
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, post_service_1.PostService])
    ], ServicesComponent);
    return ServicesComponent;
}());
exports.ServicesComponent = ServicesComponent;
//# sourceMappingURL=services.component.js.map