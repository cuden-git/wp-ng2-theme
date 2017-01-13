import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class SiteVarsService{
    private _navUrl = wpJsVars.ajaxUrl+'?action=ajax_site_vars';
    _varsObj;
    constructor( private _http: Http){}
    getVars(){
        return this._http.get(this._navUrl)
        .map( res => { 
            this._varsObj = res.json();
            console.log(res.json());
            return res.json();
        })
        .toPromise();
    }
}