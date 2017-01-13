import { Component } from '@angular/core';
import { SiteVarsService } from './site-vars.service';

@Component({
    moduleId: module.id,
    selector: '[id=footer]',
    templateUrl: `site-footer.component.html?v=${new Date().getTime()}`
})

export class SiteFooterComponent{
    constructor(private _siteVars: SiteVarsService){
      //  alert('message from footer ' + this._siteVars._varsObj.address);
    }
}
