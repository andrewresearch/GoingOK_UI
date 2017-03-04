// import { Action } from 'redux';
// import { CounterActions } from './app/actions/counter.actions';
// import {SliderActions} from "./app/actions/slider.actions";
//
// export interface IAppState {
//     count: number;
//     sliderVal: number;
// }
//
// export const INITIAL_STATE: IAppState = {
//     count: 0,
//     sliderVal: 50,
// };
//
// export function rootReducer(lastState: IAppState, action: Action): IAppState {
//     switch(action.type) {
//         case CounterActions.INCREMENT: {
//             let ls = lastState;
//             ls.count = lastState.count + 1;
//             return ls; //{ count: lastState.count + 1, sliderVal: lastState.sliderVal };
//         }
//         case CounterActions.DECREMENT: return { count: lastState.count - 1, sliderVal: lastState.sliderVal };
//
//         case SliderActions.UPDATE: {
//             let ls = lastState;
//             ls.sliderVal = action.payload;
//             return ls;
//         }
//     }
//
//     // We don't care about any other actions right now.
//     return lastState;
// }