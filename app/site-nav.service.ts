import { Injectable,Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AppModule } from './app.module';
import { HomeModule } from './home/home.module';
// import { HomeComponent } from './home/home.component';
// import { NotFoundComponent } from './not-found.component';
// import { ServicesComponent } from './services.component';

@Injectable()

export class SiteNavService{
        private _navUrl = wpJsVars.ajaxUrl+'?action=ajax_site_nav';
   // private _navUrl = "http://jsonplaceholder.typicode.com/posts";//wpJsVars.ajaxUrl+'?action=ajax_site_nav';
    siteNav;
    siteRoutes: Array<any>;
    componentsArr: Array<any>;

   constructor(private _http: Http){
   //    alert('SiteNavService');
       this.siteRoutes = ['bolo-balie'];
       this.siteNav = {};
       this.componentsArr = [];
       this.getAllComponents();
   }

    getNav(){
     //   alert('getNav()');


   // alert([12,5,8,130,44].find((ele,index)=>{alert('the index is = ' + index); return ele >= 15;})); // 130
        if(this.siteNav.isEmpty()){
            return this._http.get(this._navUrl)
            .map( res => {
                console.log('getnav');
                console.log(res.json());
                this.siteNav = res.json();
                //alert('getNav() within promise');
               // alert('this.siteNav.length = ' + this.siteNav.length);
            //   this.createRoutes();
                return res.json() })
            .toPromise();
        }else{
            return Observable.of(this.siteNav).toPromise();
        }

    }
    createRoutes(){
 //    alert("createRoutes() method form SiteNavService");
    // alert('this.siteNav.length = ' + this.siteNav.length);
      this.siteRoutes = new Array();
       for(var i = 0; i < this.siteNav.length; i++){
           
            for(let key in this.siteNav[i]){
                if(key === 'top'){
                    //var componentName = <Component> this.siteNav[i].top.ngTemplate;
                    var componentName = this.getRouteComponent(this.siteNav[i].top.ngTemplate);
                  //  alert('componentName = ' + componentName);
                    // this.siteRoutes.push({
                    //     path: this.siteNav[i].top.slug,
                    //     component: componentName,
                    //     data: {postId: this.siteNav[i].top.postId }
                    // });
                    this.siteRoutes[i] = {
                        path: this.siteNav[i].top.slug,
                        component: componentName,
                        data: { postId: this.siteNav[i].top.postId }
                    }
                }
            }
       }
      console.log('site routes = ');
      console.log(this.siteRoutes);
     let obs = Observable.of(this.siteRoutes).toPromise();
    //   console.log('the observable is = ');
    //   console.log(obs);
    //   console.log('console object is = ');
    //   console.log(console);
        return obs;
        //return this.siteRoutes;
    }
    getRouteComponent(componentName: String){
       // var componentObj;
        // var annotations: DecoratorFactory = Reflect.getMetadata('annotations', AppModule);
        // console.log('annotations = ');
        // console.log(annotations);
        // let declarations = annotations[0].declarations;

        //alert(declarations.length);
       // let moduleImports = annotations[0].imports;
    //    if(annotations[0].hasOwnProperty('imports')){
           // let moduleImports = annotations[0].imports;
            // console.log('moduleimports within if statement ...');
            // console.log(moduleImports);
           // this.findComponents(moduleImports);
      // }
    //    for(let i = 0; i < declarations.length; ++i){
          
    //       if(declarations[i].name === componentName){
    //           //alert('declarations[i] = ' + declarations[i].name);
    //           componentObj = declarations[i];
    //           break;
    //       }else{
    //           componentObj = null;
    //       }
    //    }
        // declarations.forEach((arrItem) => {
        //     if(arrItem.name === componentName){
        //         alert("we have a god damned match / " + arrItem);
        //         componentObj =  arrItem;
        //         return false;
        //     }else{
        //         componentObj = null;
        //     }
        // });
        return this.componentsArr.find(item=> { return (item.name === componentName)? item : false });
      //  return componentObj;
    }
    // findComponents(obj: Array){
    //     // var annotations: DecoratorFactory = Reflect.getMetadata('annotations', obj);
    //     console.log('findComponents() ...');
    //     console.log(obj);
    //     // if(annotations[0].hasOwnProperty('imports')){
    //         console.log('THE BOYS ARE  HERE, THE BOYS ARE QUEER...' + obj.length)
    //         for(var i = 0; i < obj.length; i++){
    //             console.log('findComponents() ...');
    //             console.log(obj[i]);
    //         }
            
    //     // }
    // }
    getAllComponents(){
        let annotations: DecoratorFactory = Reflect.getMetadata('annotations', AppModule);
       
        if(annotations[0].hasOwnProperty('declarations')){
            this.componentsArr = annotations[0].declarations);
        }
        if(annotations[0].hasOwnProperty('imports')){
            
            let imports = annotations[0].imports;
            for(let i = 0; i < imports.length; i++){
             //   alert(imports[i]);
                var impAnnotations = Reflect.getMetadata('annotations', imports[i]);

                if(impAnnotations !== undefined){
                    if(impAnnotations[0].hasOwnProperty('declarations') && impAnnotations[0].declarations !== undefined){
                        console.log('impAnnotationsanni ...' + imports[i].name);
                        console.log(impAnnotations[0]); 
                       // alert(impAnnotations[0].declarations instanceof Object);
                       impAnnotations[0].declarations.forEach(function(item){
                           this.componentsArr.push(item);
                       }.bind(this));
                     //   this.componentsArr.concat(impAnnotations[0].declarations);

                    }
                    //impAnnotations[0].declarations !== undefined && 

                }

            }
        }
        console.log('getAllComponents() = ');
        console.log(this.componentsArr);
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