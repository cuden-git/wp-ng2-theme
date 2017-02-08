import { Component, HostBinding } from '@angular/core';
import { routerTransition } from '../router.animations';
//import { RightColComponent } from '../right-col.component';
import { HomeModule } from './home.module';
import { AppModule } from '../app.module';
import { NgModule, APP_INITIALIZER }      from '@angular/core';
@Component({
    moduleId: module.id,
    templateUrl: `home.component.html?v=${new Date().getTime()}`,
    animations: [routerTransition]
})
export class HomeComponent{
    @HostBinding('@routerTransition') routeAnimation = true;
    @HostBinding('class') class = "component";
    constructor(){
        //alert('home'+ Component);
      //  alert(Component);
        // console.log('AppModule ng = ');
        // console.log(AppModule['NgModule'];
        // console.log('AppModule.declarationsololol');
        // console.log(AppModule['declarations']);
     let annotations: DecoratorFactory = Reflect.getMetadata('annotations', AppModule);
     console.log(annotations);
     //alert(annotations[0].declarations[0].name);        

    }
}