import { Component, OnInit } from '@angular/core';
import { AppComponent } from './app.component';
import { SiteVarsService } from './site-vars.service';

@Component({
    moduleId: module.id,
    selector: '#header',
    /*templateUrl: wpJsVars.sitePath+'/app/site-header.component.html'*/
    templateUrl: `site-header.component.html?v=${new Date().getTime()}`
})
export class SiteHeaderComponent implements OnInit{
    constructor(private _siteVars: SiteVarsService){}
    ngOnInit(){
       // alert(this._siteVars._varsObj['address']);
        console.log('the addressopop = ' + this._siteVars._varsObj.address);
        // this._siteVars.getVars()
        // .then(items => {
        //     console.log(items);
        // });
    }
}