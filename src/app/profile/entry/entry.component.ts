/**
 * Created by andrew on 6/06/2016.
 */

import {Component} from '@angular/core';
import {SliderComponent} from './slider/slider.component'
import {Observable} from "rxjs";
import {ReflectionStore} from "../../data/ReflectionStore";
import {Store} from "@ngrx/store";
import {SET_TEXT} from "../../store/reflection.store";

interface AppState {
    reflection: ReflectionStore;
}


@Component({
    selector: 'entry',
    providers: [SliderComponent],
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css']
})

export class EntryComponent {
    private reflection: Observable<ReflectionStore>;

    private inner_store: Store<AppState>;

    constructor(private store: Store<AppState>){
        this.inner_store = store;
        this.reflection = store.select('reflectionStore');
        console.log("The constructor has run. The store is: "+store.toString());
    }

    public readThePoint():Observable<number> {
        return this.reflection.map( r => r.currentEntry.reflection.point)
    }

    public reflectText:string

    public setTheText() {
        // if(this.readThePoint().) {
        //     window.alert("You have not set a reflection point. Please adjust the slider according to how you are going.")
        // } else {
            console.log("Setting the text to: " + this.reflectText);
            this.inner_store.dispatch({type: SET_TEXT, payload: this.reflectText});
            this.reflectText = "";
        // }
    }
}
