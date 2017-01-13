import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routerTransition } from './router.animations';
import { PostService } from './post.service';
import { SiteNavService } from './site-nav.service';
import { RightColComponent } from './right-col.component';

@Component({
    moduleId: module.id,
    templateUrl: `services.component.html?v=${new Date().getTime()}`,
    animations: [routerTransition]/*,
    host: {'[@routerTransition]': ''}*/
})

export class ServicesComponent implements OnInit, OnDestroy{
    @HostBinding('@routerTransition') routeAnimation = true;
    @HostBinding('class') class = "component";
    //@HostBinding('style.border')   border = '3px solid green';
    postId;
    constructor(private _activeRoute: ActivatedRoute,private _posts: PostService/*,private _siteNav: SiteNavService*/){
        this.postId = this._activeRoute.snapshot.data.postId;
        console.log('post id = ' + this._activeRoute.snapshot.data.postId);
    }
    ngOnInit(){
        //console.log(this._siteNav.siteNav);
        // this._posts.getPost(this.postId)
        // .then(posts => {
        //     console.log(posts);
        // });
      
      
       // this.postId = this._activeRoute.data.map(data => data);
       // console.log(this.postId.destination._value);
       // alert(this.postId.destination._value);
       // alert('services enter');
    }
    ngOnDestroy(){
        //alert('services leave');
    }
}