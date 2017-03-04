/**
 * Created by andrew on 6/06/2016.
 */

import {Component} from '@angular/core';
import {EntryComponent} from './entry/entry.component';
import {ReflectionChartComponent} from './reflectionChart/reflectionChart.component'

//Redux
// import { NgRedux, select } from '@angular-redux/store';
// import { CounterActions } from '../actions/counter.actions';
// import {IAppState} from "../../store";
// import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'profile',
    providers: [EntryComponent,ReflectionChartComponent], //,CounterActions],
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css'],
})

export class ProfileComponent {
    //readonly count$: Observable<number>;
    //subscription;
    //@select('count') readonly count$: Observable<number>;
    //@select('sliderVal') readonly sliderVal$: Observable<number>;

    // constructor(private ngRedux: NgRedux<IAppState>,private actions: CounterActions) {
    //     //this.count$ = ngRedux.select<number>('count');
    // }

    increment() {
        //this.ngRedux.dispatch(this.actions.increment());
    }

    decrement() {
        //this.ngRedux.dispatch(this.actions.decrement());
    }

    refChartData =  [
{ timestamp:"2016-11-01T12:00:00", reflection:{ point: 50.0, text:"This is some text"}},
{ timestamp:"2016-12-02T12:00:00", reflection:{ point: 100.0, text:"This is some text too."}},
{ timestamp:"2017-01-03T00:00:00", reflection:{ point: 0.0, text:"This is some text three."}},
{ timestamp:"2017-01-05T10:00:00", reflection:{ point: 75.5, text:"Final text."}}
];

}
