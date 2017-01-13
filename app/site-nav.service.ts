import { Injectable,Component } from '@angular/core';
import { Routes } from '@angular/router';

//import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AppModule } from './app.module';
// import { HomeComponent } from './home/home.component';
// import { NotFoundComponent } from './not-found.component';
// import { ServicesComponent } from './services.component';

@Injectable()

export class SiteNavService{
        private _navUrl = wpJsVars.ajaxUrl+'?action=ajax_site_nav';
   // private _navUrl = "http://jsonplaceholder.typicode.com/posts";//wpJsVars.ajaxUrl+'?action=ajax_site_nav';
    siteNav;
    siteRoutes;
   constructor(private _http: Http){
       this.siteRoutes = [];
   }

    getNav(){
        //alert('getNav()');
        return this._http.get(this._navUrl)
        .map( res => { console.log(res.json());
            this.siteNav = res.json();
            //alert('here');
            this.createRoutes();
            return res.json() })
        .toPromise();
    }
    createRoutes(){
        let appMod = new AppModule();
        console.log(appMod);
       for(var i = 0; i < this.siteNav.length; i++){
            for(let key in this.siteNav[i]){
                if(key === 'top'){
                    var componentName = <Component> this.siteNav[i].top.ngTemplate;
                   // alert('componentName = ' + componentName);
                    this.siteRoutes.push({
                        path: this.siteNav[i].top.slug,
                        component: componentName,
                        data: {postId: this.siteNav[i].top.postId }
                    });
                }
               // alert(this.siteNav[i][key] + " / " + key);
            }
       }
       console.log('site routes = ');
       console.log(this.siteRoutes);
    }
    // prepareNav(){
    //     return [
    //                 {
    //                 path: 'home',
    //                 component: HomeComponent
    //                 },
    //                 {
    //                     path: 'services',
    //                     component: ServicesComponent,
    //                     data: {postId: 9}
    //                 },
    //                 {
    //                     path: '',
    //                     component: HomeComponent
    //                 },
    //                 {
    //                     path: '**',
    //                     component: NotFoundComponent
    //                 }
    //         ]
    // }
}