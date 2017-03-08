import { NgModule, APP_INITIALIZER, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
//import { Http } from '@angular/http';
import { SiteNavService } from './site-nav.service';
import { GetRoutes } from './site-routes';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found.component';
import { ServicesComponent } from './services.component';

const routes: Routes = [
  {
  path: 'home',
  component: HomeComponent,
  data: {postId: 9}
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
// new GetRoutes.showRoutes();
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

export class AppRouting implements OnInit{
// routes
//   {
//   path: 'projects',
//   component: HomeComponent
//   };
    lateRoutes;
    constructor(private router: Router, private siteNav: SiteNavService){
     // alert('AppRouting');
     this.siteNav.getNav()
     .then(
       (data) => { 
       //  alert('data = ' + data);
         this.lateRoutes = this.siteNav.createRoutes()
         .then(
            (data) => { this.router.resetConfig(data.concat(routes));
              console.log('this.router.config');
              console.log(this.router.config) ;
            }
         );
        
       }
     );
      // this.lateRoutes = this.siteNav.createRoutes()
      // .then( 
      //   data => {
      //       alert('Approuting Promise = ' + data);
      //           // console.log('from app routing moduleross = ');
      //           // console.log(this.lateRoutes.concat(routes));
      //           // console.log("this.siteNav.siteRoutes");
      //           // console.log(this.siteNav.siteRoutes);
      //           //this.router.resetConfig(data.concat(routes));
      //   }
      // );
    // this.lateRoutes = this.siteNav.createRoutes();
      
      //this.siteNav.siteRoutes;
      // this.lateRoutes = [{
      //   path: 'projects',
      //   component: HomeComponent
      // }];
     // alert("this.lateRoutes = " + this.lateRoutes + " / this.siteNav.siteRoutes = " + this.siteNav.siteRoutes);

      
    }
  
    // routes: Routes;
    // constructor(private _navService: SiteNavService){
    //     this.routes = this._navService.prepareNav();
    // }
    ngOnInit(){
      // alert('nng on init');
    }
}