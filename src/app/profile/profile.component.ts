/**
 * Created by andrew on 6/06/2016.
 */

import {Component} from '@angular/core';
import {EntryComponent} from './entry/entry.component';
import {ReflectionChartComponent} from './reflectionChart/reflectionChart.component'


import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from '../reducers/counter';
import {Observable} from "rxjs";

interface AppState {
    counter: number;
}


@Component({
    selector: 'profile',
    providers: [EntryComponent,ReflectionChartComponent],
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css'],
})

export class ProfileComponent {
    counter: Observable<number>;

    constructor(private store: Store<AppState>){
        this.counter = store.select('counter');
    }

    increment(){
        this.store.dispatch({ type: INCREMENT });
    }

    decrement(){
        this.store.dispatch({ type: DECREMENT });
    }

    reset(){
        this.store.dispatch({ type: RESET });
    }


    refChartData =  [
{ timestamp:"2016-11-01T12:00:00", reflection:{ point: 50.0, text:"This is some text"}},
{ timestamp:"2016-12-02T12:00:00", reflection:{ point: 100.0, text:"This is some text too."}},
{ timestamp:"2017-01-03T00:00:00", reflection:{ point: 0.0, text:"This is some text three."}},
{ timestamp:"2017-01-05T10:00:00", reflection:{ point: 75.5, text:"Final text."}}
];

}
