/**
 * Created by andrew on 29/3/17.
 */

import reflectionsReducer, * as fromReflections from './reflections.reducer';
import userReducer, * as fromUser from './user.reducer';
import googleProfileReducer, * as fromGoogleProfile from './googleProfile.reducer';
import {combineReducers} from "@ngrx/store";
import {compose} from "@ngrx/core";

export interface AppState {
    reflections: fromReflections.ReflectionsState;
    user: fromUser.UserState;
    googleProfile: fromGoogleProfile.GoogleProfileState;
};

export default compose(combineReducers)({
    reflections: reflectionsReducer,
    user: userReducer,
    googleProfile: googleProfileReducer
});