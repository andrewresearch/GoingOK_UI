/**
 * Created by andrew on 4/3/17.
 */

// import { ActionReducer, Action } from '@ngrx/store';
// import {ReflectionStore, Reflection, ReflectionEntry} from "./data/ReflectionStore";
// import {UserStore} from './data/UserStore';
//
// export const SET_POINT = 'SETP';
// export const SET_TEXT = 'SETT';
// export const LOAD_PREV = 'LOADP';
//
// export function reflectionReducer(state: ReflectionStore = new ReflectionStore(), action: Action): ReflectionStore {
//     switch (action.type) {
//         case SET_POINT: {
//             console.log("SET_POINT called in reflectionReducer");
//             state.currentEntry.reflection.point = 100*action.payload;
//             return state;
//         }
//         case SET_TEXT: {
//             console.log("SET_TEXT called in reflectionReducer");
//             state.currentEntry.reflection.text = action.payload;
//             state.reflectionEntries.unshift(state.currentEntry);
//             state.currentEntry = new ReflectionEntry();
//             return state;
//         }
//         case LOAD_PREV: {
//             console.log("LOAD_PREV called in reflectionReducer");
//             state = action.payload;
//             return state;
//         }
//         default:
//             return state;
//     }
// }
