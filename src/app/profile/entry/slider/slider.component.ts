/**
 * Created by andrew on 6/06/2016.
 */

import {Component, OnInit, ViewEncapsulation} from '@angular/core';
//import {ReflectionStore} from "../../../data/ReflectionStore";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {SET_POINT} from "../../../store/reflection.store";
import {ReflectionStore, Reflection, ReflectionEntry} from "../../../data/ReflectionStore";

declare var Dragdealer: any;

interface AppState {
    reflection: ReflectionStore;
}

@Component({
    selector: 'slider',
    templateUrl: 'slider.component.html',
    styleUrls: ['slider.component.css'],
    //encapsulation: ViewEncapsulation.None
})

export class SliderComponent { //implements OnInit {

    private reflection: Observable<ReflectionStore>;

    private inner_store: Store<AppState>;

    //initialPoint = 0.7;


    constructor(private store: Store<AppState>){
        this.inner_store = store;
        this.reflection = store.select('reflectionStore');
        console.log("The constructor has run. The store is: "+store.toString());
    }

    public readThePoint():Observable<number> {
        return this.reflection.map( r => r.currentEntry.reflection.point)
    }

    public setThePoint = (n:number) => {
        console.log("Setting the point to: "+n)
        this.inner_store.dispatch({ type: SET_POINT, payload:n });
    }

    ngAfterViewInit() {
        new Dragdealer('simple-slider',{steps:101,snap:true, x:0.5, callback: this.setThePoint})
    }

}
