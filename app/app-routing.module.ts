import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { Http } from '@angular/http';
//import { SiteNavService } from './site-nav.service';
//import { getRoutes } from './site-routes';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found.component';
import { ServicesComponent } from './services.component';

const routes: Routes = [
  {
  path: 'home',
  component: HomeComponent
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: {postId: 9}
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

console.log('const routes = ');
console.log(routes);

@NgModule({
    /*providers: [{
        provide: APP_INITIALIZER,
        useFactory: (siteNav: SiteNavService) => { 
        const routes: Routes = siteNav.prepareNav();
         return function(){
             
           return siteNav.prepareNav();
          }
        }
    }],*/
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouting{
    constructor(){
      alert('const');
    }
  
    // routes: Routes;
    // constructor(private _navService: SiteNavService){
    //     this.routes = this._navService.prepareNav();
    // }
}