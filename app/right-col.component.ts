import { Component, HostBinding } from '@angular/core';

@Component({
    moduleId: module.id,
    /*selector: 'right-col',*/
    selector: '[id=rightCol]',
    templateUrl: `right-col.component.html?v=${new Date().getTime()}`
})

export class RightColComponent{
   // @HostBinding('class') class = "component";
}