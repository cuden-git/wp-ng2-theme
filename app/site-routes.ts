import { SiteNavService } from './site-nav.service';

export class GetRoutes{
   // var navObj: SiteNavService;/*= new SiteNavService(); */
   siteRoutes;
    constructor(private navService: SiteNavService){

    }
    showRoutes(){
        this.siteRoutes = this.navService.createRoutes(); 
        return this.siteRoutes;
    }
     
}