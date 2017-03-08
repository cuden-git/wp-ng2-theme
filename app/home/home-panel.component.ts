import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { CarouselService } from '../carousel.service';
import { PostMetaService } from '../post-meta.service';
import {Observable} from "rxjs/Observable";

 @Component({
     moduleId: module.id,
     selector:'[id=homeCarousel]',
     templateUrl:`home-panel.component.html?v=${new Date().getTime()}`
 })
 export class HomePanel implements OnInit{
    // private _ajaxURL;
    carouselItems: Observable<Array<any>>;

    constructor(private _http:Http, private _carousel: CarouselService, private _postMeta: PostMetaService, private _activeRoute: ActivatedRoute){
        
          //  this._ajaxURL = wpJsVars.ajaxUrl+'?action=ajax_site_nav?carouselId=234';
          //  console.log(this._ajaxURL);
          //  alert(this._ajaxURL);
    }
    ngOnInit(){
        alert(this._activeRoute.snapshot.data.postId);
        this._postMeta.getMetaData()
        .subscribe((data)=>{
            alert('bebotzanni con-fantani' + data)
        });
        this._carousel.getCarousel(234)
        .subscribe((data)=> {
            this.carouselItems = data;
            console.log('Homepanel carousel service');
            console.log(data);
            console.log('Homepanel constructor');
            console.log(this.carouselItems);  
        });
    }
    // getCarousel(){
        
    //     this._http.get(this._ajaxURL)
    //     .map(res => {
    //         alert('bebo' + res);
    //         res.json();
    //         console.log('Carousel output...');
    //         console.log(res.json());
    //     })
    //     .toPromise();
       /* .then((data)=>{ console.log('Carousel data...');console.log(data);}); */
    // }
 }