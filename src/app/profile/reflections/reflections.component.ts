/**
 * Created by andrew on 6/06/2016.
 */

import {Component} from '@angular/core';
import {ReflectionStore, ReflectionEntry} from "../../data/ReflectionStore";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";


interface AppState {
    reflection: ReflectionStore;
}

@Component({
    selector: 'reflections',
    templateUrl: 'reflections.component.html',
    styleUrls: ['reflections.component.css']
})

export class ReflectionsComponent {
    private reflection: Observable<ReflectionStore>;

    private inner_store: Store<AppState>;

    public dataLoaded;

    constructor(private store: Store<AppState>){
        this.inner_store = store;
        this.reflection = store.select('reflectionStore');
        //console.log("The constructor has run. The store is: "+store.toString());
        this.dataLoaded = true;
    }

    readEntries():Observable<ReflectionEntry[]> {
        return this.reflection.map(r => r.reflectionEntries)
    }

    // public readThePoint():Observable<number> {
    //     return this.reflection.map( r => r.currentEntry.reflection.point)
    // }

    //public reflectText:string


    // public setTheText() {
    //     console.log("Setting the text to: "+this.reflectText);
    //     this.inner_store.dispatch({ type: SET_TEXT, payload:this.reflectText });
    //     this.reflectText = "";
    // }
}
