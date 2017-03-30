/**
 * Created by andrew on 6/06/2016.
 */

import {Component} from '@angular/core';
import {EntryComponent} from './entry/entry.component';
import {ReflectionChartComponent} from './reflectionChart/reflectionChart.component'

//import {Observable} from "rxjs";
import {Reflection, ReflectionEntry, Reflections} from "../store/models/Reflections";


@Component({
    selector: 'profile',
    providers: [EntryComponent,ReflectionChartComponent],
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css'],
})

export class ProfileComponent {

    //reflection: Observable<ReflectionStore>;
    reflections: Reflections = new Reflections();
    currentReflection: Reflection = new Reflection();
    public getReflections() {
        return JSON.stringify(this.reflections);
    }

    constructor() {}

    onNotify(ref:Reflection):void {
        console.log("Notify message: "+JSON.stringify(ref));
        this.currentReflection = ref;
    }

    // readThePoint():Observable<number> {
    //  //return this.reflection.map( r => r.currentEntry.reflection.point)
    //     return new Observable()
    // }
    // readTheText():Observable<string> {
    //     //return this.reflection.map( r => r.currentEntry.reflection.text)
    //     return new Observable()
    // }

    // set() {
    //     //this.store.dispatch({ type: SET_POINT, payload: 59 });
    // }

    public loadHistoric() {
        console.log("loadHistoric() run")
        let refs = new Reflections()
        refs.reflectionEntries = this.refChartData.map( r => {
                let entry = new ReflectionEntry();
                entry.timestamp = r.timestamp;
                entry.reflection = r.reflection;
                return entry;
        })
        // let entry = new ReflectionEntry();
        // entry.reflection.text = "Test entry";
        // entry.reflection.point = 0.0;
        refs.reflectionEntries = refs.reflectionEntries.reverse();

        this.reflections = refs;
        //this.store.dispatch(this.reflectionActions.loadReflections());
    }

//     readStore():Observable<string> {
//         //return this.reflection.map(r => JSON.stringify(r))
//         return new Observable()
//     }
//
//     getEntries():Observable<any[]> {
//         //return this.reflection.map(r => r.reflectionEntries)
//         return new Observable()
//     }
//
//
    refChartData =  [
{ timestamp:"2016-11-01T12:00:00", reflection:{ point: 50.0, text:"This is some text"}},
{ timestamp:"2016-12-02T12:00:00", reflection:{ point: 100.0, text:"This is some text too."}},
{ timestamp:"2017-01-03T00:00:00", reflection:{ point: 0.0, text:"This is some text three."}},
{ timestamp:"2017-01-05T10:00:00", reflection:{ point: 75.5, text:"Final text."}}
];

}
