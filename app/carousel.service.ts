import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class CarouselService{
    private _ajaxURL;
    constructor(private _http:Http){

    }
    getCarousel(carouselId: Number) {
       this._ajaxURL = wpJsVars.ajaxUrl+'?action=ajax_carousel&carouselId=234';
       // this._ajaxURL = wpJsVars.ajaxUrl+`?action=ajax_site_nav?carouselId=${carouselId}`;
        return this._http.get(this._ajaxURL)
            .map(res => {
                
                console.log(this._ajaxURL);
                console.log('Carousel service class....');
                console.log(res.json());
                return res.json();
            })
            /*.toPromise()*/;
        /* .then((data)=>{ console.log('Carousel data...');console.log(data);}); */
    }
}