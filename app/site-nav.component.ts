import { Component, OnInit } from '@angular/core';
import { SiteNavService } from './site-nav.service';

@Component({
    moduleId: module.id,
    selector: '[id=navBar]',
   // templateUrl: 'site-nav.component.html'
        templateUrl: `site-nav.component.html?v=${new Date().getTime()}`,
//     template:`
//     <div class="container">
//     rarrrrruuuu
// <ul id="mainNav">
//     <li *ngFor="let item of navItems">
//        item {{item.top.title}}
//     </li>
// </ul>
// </div>`
})
export class SiteNavComponent implements OnInit{
    navItems;
    constructor(private _siteNav: SiteNavService){
        this.navItems = this._siteNav.siteNav;
    }

    ngOnInit(){
        // console.log('from SiteNavComponent class = ' + this._siteNav.siteNav)
        // this._siteNav.getNav()
        // .then(items=> {
        //     console.log(items);
        //     this.navItems = items;
        // });
    }
}