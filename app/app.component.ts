import { Component,trigger, state, animate, style, transition/*, OnInit*/ } from '@angular/core';
//import { routerTransition } from './router.animations';
import { RightColComponent } from './right-col.component';

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: `app.component.html?v=${new Date().getTime()}`
})

export class AppComponent /*implements OnInit*/ {
   
    // items;
    constructor() {}
    // ngOnInit() {
    //     this._siteNav.getNav()
    //         .then(items => {
    //             this.items = items;
    //             console.log(items);
    //         });

    // }
}