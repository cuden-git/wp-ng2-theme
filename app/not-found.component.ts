import { Component, HostBinding } from '@angular/core';
import { routerTransition } from './router.animations';
import { RightColComponent } from './right-col.component';

@Component({
    moduleId: module.id,
    templateUrl: `not-found.component.html?v=${new Date().getTime()}`,
    animations: [routerTransition]
})

export class NotFoundComponent{
    @HostBinding('@routerTransition') routeAnimation = true;
    @HostBinding('class') class = "component";
}