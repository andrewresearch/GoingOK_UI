/**
 * Created by andrew on 29/3/17.
 */

import {User} from "../models";
import {UserActions} from "../actions";
import {Action} from "@ngrx/store";

export type UserState = User;

const initialState: UserState = new User();


export default function (state = initialState, action: Action): UserState {
    switch (action.type) {
        case UserActions.SIGNED_IN: {
            console.log("User Signed In");
            let newState = new User();
            newState.isSignedIn = true;
            newState.google_token = action.payload;
            return newState;
        }
        case UserActions.SIGNED_OUT: {
            console.log("User Signed Out");
            let newState = new User();
            state.isSignedIn = false;
            state.google_token = "";
            return newState;
        }
        case UserActions.RESET_USER: {
            return initialState;
        }
        case UserActions.GET_USER_SUCCESS: {
            console.log("GET_USER_SUCCESS payload: "+JSON.stringify(action.payload));
            return state;
        }
        case UserActions.CHECK_CONNECT_RESULT: {
            console.log("CHECK_CONNECT_RESULT payload: "+JSON.stringify(action.payload));
            return state;
        }
        default: {
            console.log("Returning default state for user")
            return state;
        }
    }
}
