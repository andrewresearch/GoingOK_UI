// import { Injectable } from '@angular/core';
// import { NgRedux } from '@angular-redux/store';
// import {IAppState} from "../../store";
// //import { Action } from 'redux';
// //import { IAppState } from '../store';
// //import { RandomNumberService } from '../services/random-number.service';
//
// /**
//  * Action creators in Angular 2. We may as well adopt a more
//  * class-based approach to satisfy Angular 2's OOP idiom. It
//  * has the advantage of letting us use the dependency injector
//  * as a replacement for redux-thunk.
//  */
// @Injectable()
// export class SliderActions {
//
//   constructor (private ngRedux: NgRedux<IAppState>) {
//
//   }
//
//   static UPDATE ='UPDATE';
//
//   recordValue(v:number): void {
//     this.ngRedux.dispatch({ type: SliderActions.UPDATE, payload: v }) ;
//   }
//
//   /*static INCREMENT = 'INCREMENT';
//   static DECREMENT = 'DECREMENT';
//
//   increment(): Action {
//     return { type: CounterActions.INCREMENT };
//   }
//
//   decrement(): Action {
//     return { type: CounterActions.DECREMENT };
//   } */
// }
