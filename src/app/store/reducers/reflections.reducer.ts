// /**
//  * Created by andrew on 29/3/17.
//  */
//
// import {ReflectionEntry, Reflections} from "../models/Reflections";
// import {Action} from "@ngrx/store";
// import {ReflectionsActions} from "../actions";
// import {Profile} from "../models";
//
// export type ReflectionsState = Reflections;
//
// const initialState: ReflectionsState = new Reflections();
//
// export default function (state = initialState, action: Action): ReflectionsState {
//     switch (action.type) {
//         case ReflectionsActions.ADD_REFLECTION: {
//             let ref:ReflectionEntry = action.payload;
//             state.addReflectionEntry(ref);
//             return state;
//         }
//         case ReflectionsActions.SAVE_ENTRY_RESULT: {
//             console.log("Result of Entry Save: "+JSON.stringify(action.payload));
//             return state;
//         }
//         case ReflectionsActions.RESET_REFLECTIONS: {
//             return initialState;
//         }
//         case ReflectionsActions.GET_REFLECTIONS: {
//             return state;
//         }
//         case ReflectionsActions.GET_REFLECTIONS_SUCCESS: {
//             console.log("Result of get Reflections: "+JSON.stringify(action.payload));
//             let profile = new Profile();
//             profile = action.payload;
//             console.log("Messages: "+JSON.stringify(profile.messages));
//             console.log("Reflections: "+JSON.stringify(profile.reflectionEntries));
//             state.reflectionEntries = profile.reflectionEntries;
//             console.log("ResearchInfo: "+JSON.stringify(profile.research));
//             return state;
//         }
//         case ReflectionsActions.LOAD_DUMMY: {
//             state = new Reflections();
//             state.dummyData();
//             return state;
//         }
//         default: {
//             return state;
//         }
//     }
// }
