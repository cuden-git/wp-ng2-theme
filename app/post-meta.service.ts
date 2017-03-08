import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class PostMetaService{
    private _ajaxURL;
    testVar:Array<any>;
    testObj:Object;
    constructor(private _http:Http){
        // this.testVar = ['val1','val2','val3','val4','val5'] ;
        // console.log('Stringify to multiply');
        // console.log(JSON.stringify(this.testVar));
    }
    getMetaData(){
        this.testVar = ['panel1_title','panel1_caption','panel1_url','panel1_image','panel1_box_colour'] ;
        // this.testObj = {
        //     prop1 : 'val1',
        //     prop2 : 'val2',
        //     prop3 : 'val3',
        //     prop4 : 'val4'
        // };
       this.testObj = {
            panel1: {
                panel1_title: "panel1_title",
                panel1_caption: "panel1_caption",
                panel1_url: "panel1_url",
                panel1_image: "panel1_image",
                panel1_box_colour: "panel1_box_colour"
            },
            panel2:{
                panel2_title: "panel2_title",
                panel2_caption: "panel2_caption",
                panel2_url: "panel2_url",
                panel2_image: "panel2_image",
                panel2_box_colour: "panel2_box_colour"           
            }
        };
        alert('bo');
        console.log(this.testObj);
        //this._ajaxURL = wpJsVars.ajaxUrl+'?action=ajax_post_meta&postId=&metaKey=';
        this._ajaxURL = wpJsVars.ajaxUrl+'?action=ajax_post_meta&metaKey=' + encodeURI(JSON.stringify(this.testVar));
        //this._ajaxURL = wpJsVars.ajaxUrl+'?action=ajax_post_meta';
        console.log('PostMetaService getMetaData ajaxURLius');
        console.log(this._ajaxURL);
        return this._http.get(this._ajaxURL)
        .map(res => {
            console.log('PostMetaService getMetaData ajaxURL...');
           // console.log(res.json());
           // return res.json();
        });
    }
}