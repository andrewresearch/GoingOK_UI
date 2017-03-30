/**
 * Created by andrew on 29/3/17.
 */

import {Reflections} from "../models/Reflections";
import {Action} from "@ngrx/store";
import {ReflectionsActions} from "../actions";

export type ReflectionsState = Reflections;

const initialState: ReflectionsState = new Reflections();

export default function (state = initialState, action: Action): ReflectionsState {
    switch (action.type) {
        case ReflectionsActions.RESET_REFLECTIONS: {
            return initialState;
        }
        case ReflectionsActions.GET_REFLECTIONS_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
