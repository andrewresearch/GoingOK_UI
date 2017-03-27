/**
 * Created by andrew on 6/06/2016.
 */

import {Component} from '@angular/core';
import {EntryComponent} from './entry/entry.component';
import {ReflectionChartComponent} from './reflectionChart/reflectionChart.component'


import { Store } from '@ngrx/store';
import {SET_POINT, LOAD_PREV} from '../store/reflection.store';
import {Observable} from "rxjs";
import {ReflectionStore, Reflection, ReflectionEntry} from "../data/ReflectionStore";

interface AppState {
    reflection: ReflectionStore;
}

@Component({
    selector: 'profile',
    providers: [EntryComponent,ReflectionChartComponent],
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css'],
})

export class ProfileComponent {

    reflection: Observable<ReflectionStore>;
    entries: Observable<ReflectionEntry[]>;

    constructor(private store: Store<AppState>){
        this.reflection = store.select('reflectionStore');
        this.entries = this.reflection.map(r => r.reflectionEntries);
        this.loadHistoric();
    }

    readThePoint():Observable<number> {
     return this.reflection.map( r => r.currentEntry.reflection.point)
    }
    readTheText():Observable<string> {
        return this.reflection.map( r => r.currentEntry.reflection.text)
    }

    set() {
        this.store.dispatch({ type: SET_POINT, payload: 59 });
    }

    loadHistoric() {
        let store = new ReflectionStore()
        store.reflectionEntries = this.refChartData.map( r => {
                let entry = new ReflectionEntry();
                entry.timestamp = r.timestamp;
                entry.reflection = r.reflection;
                return entry;
        })
        let entry = new ReflectionEntry();
        entry.reflection.text = "Test entry";
        entry.reflection.point = 0.0;
        store.reflectionEntries = store.reflectionEntries.concat(entry).reverse();
        this.store.dispatch({ type: LOAD_PREV, payload: store });
    }

    readStore():Observable<string> {
        return this.reflection.map(r => JSON.stringify(r))
    }

    getEntries():Observable<ReflectionEntry[]> {
        return this.reflection.map(r => r.reflectionEntries)
    }


    refChartData =  [
{ timestamp:"2016-11-01T12:00:00", reflection:{ point: 50.0, text:"This is some text"}},
{ timestamp:"2016-12-02T12:00:00", reflection:{ point: 100.0, text:"This is some text too."}},
{ timestamp:"2017-01-03T00:00:00", reflection:{ point: 0.0, text:"This is some text three."}},
{ timestamp:"2017-01-05T10:00:00", reflection:{ point: 75.5, text:"Final text."}}
];

}
