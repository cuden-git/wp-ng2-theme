import { NgModule, APP_INITIALIZER }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';

import { SiteNavService } from './site-nav.service';
import { SiteVarsService } from './site-vars.service';
import { PostService } from './post.service';

import { SiteHeaderComponent } from './site-header.component';
import { SiteNavComponent } from './site-nav.component';
import { SiteFooterComponent } from './site-footer.component';
//import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { ServicesComponent } from './services.component';
import { NotFoundComponent } from './not-found.component';
import { AppRouting } from './app-routing.module';
import { RightColComponent} from './right-col.component';

@NgModule({
  imports:      [ 
      BrowserModule,
      HttpModule,
      AppRouting,
      HomeModule
   ],
  declarations: [ AppComponent, SiteHeaderComponent, SiteNavComponent, SiteFooterComponent, /*HomeComponent,*/ NotFoundComponent, ServicesComponent, RightColComponent ],
  providers: [ SiteNavService, SiteVarsService,PostService,{
        provide: APP_INITIALIZER,
        useFactory: (config: SiteVarsService,siteNav: SiteNavService) => { 
         return function(){
           return config.getVars(), siteNav.getNav();
          }
        },
        deps: [SiteVarsService,SiteNavService],
        multi: true
    } ],
    /*exports: [RightColComponent],*/
  bootstrap:    [ AppComponent ]
})
export class AppModule { } 

// useFactory: (config: SiteVarsService,siteNav: SiteNavService) => () => {config.getVars();siteNav.getNav()}

// function (config: SiteVarsService,siteNav: SiteNavService) { 
//   function(){
//     config.getVars();
//     siteNav.getNav();
//   }
// }