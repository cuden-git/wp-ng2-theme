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
var PostMetaService = (function () {
    function PostMetaService(_http) {
        this._http = _http;
        // this.testVar = ['val1','val2','val3','val4','val5'] ;
        // console.log('Stringify to multiply');
        // console.log(JSON.stringify(this.testVar));
    }
    PostMetaService.prototype.getMetaData = function () {
        this.testVar = ['panel1_title', 'panel1_caption', 'panel1_url', 'panel1_image', 'panel1_box_colour'];
        // this.testObj = {
        //     prop1 : 'val1',
        //     prop2 : 'val2',
        //     prop3 : 'val3',
        //     prop4 : 'val4'
        // };
        this.testObj = {
            panel1: {
                panel1_title: "panel1_title",
                panel1_caption: "panel1_caption",
                panel1_url: "panel1_url",
                panel1_image: "panel1_image",
                panel1_box_colour: "panel1_box_colour"
            },
            panel2: {
                panel2_title: "panel2_title",
                panel2_caption: "panel2_caption",
                panel2_url: "panel2_url",
                panel2_image: "panel2_image",
                panel2_box_colour: "panel2_box_colour"
            }
        };
        alert('bo');
        console.log(this.testObj);
        //this._ajaxURL = wpJsVars.ajaxUrl+'?action=ajax_post_meta&postId=&metaKey=';
        this._ajaxURL = wpJsVars.ajaxUrl + '?action=ajax_post_meta&metaKey=' + encodeURI(JSON.stringify(this.testVar));
        //this._ajaxURL = wpJsVars.ajaxUrl+'?action=ajax_post_meta';
        console.log('PostMetaService getMetaData ajaxURLius');
        console.log(this._ajaxURL);
        return this._http.get(this._ajaxURL)
            .map(function (res) {
            console.log('PostMetaService getMetaData ajaxURL...');
            // console.log(res.json());
            // return res.json();
        });
    };
    PostMetaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PostMetaService);
    return PostMetaService;
}());
exports.PostMetaService = PostMetaService;
//# sourceMappingURL=post-meta.service.js.map