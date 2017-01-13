import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class PostService{
    private _postUrl;// = wpJsVars.ajaxUrl+'?action=ajax_page_content&post_id=';
    constructor(private _http: Http){}
    getPost(postId){
        this._postUrl = wpJsVars.ajaxUrl+'?action=ajax_page_content&post_id=' + postId;
        return this._http.get(this._postUrl)
        .map( res => res.json())
        .toPromise();
    }
}