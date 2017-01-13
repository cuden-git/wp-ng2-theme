import { Component, HostBinding } from '@angular/core';
import { routerTransition } from '../router.animations';
//import { RightColComponent } from '../right-col.component';

@Component({
    moduleId: module.id,
    templateUrl: `home.component.html?v=${new Date().getTime()}`,
    animations: [routerTransition]
})
export class HomeComponent{
    @HostBinding('@routerTransition') routeAnimation = true;
    @HostBinding('class') class = "component";
}