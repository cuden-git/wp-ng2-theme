import { SiteNavService } from './site-nav.service';

export function getRoutes(){
    var navObj: SiteNavService; /*= new SiteNavService(); */
    return navObj.prepareNav();  
}