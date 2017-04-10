/**
 * Created by andrew on 29/3/17.
 */

//import reflectionsReducer, * as fromReflections from './reflections.reducer';
import userReducer, * as fromUser from './user.reducer';
import profileReducer, * as fromProfile from './profile.reducer';
import googleProfileReducer, * as fromGoogleProfile from './googleProfile.reducer';
import {combineReducers} from "@ngrx/store";
import {compose} from "@ngrx/core";

export interface AppState {
  //  reflections: fromReflections.ReflectionsState;
    user: fromUser.UserState;
    profile: fromProfile.ProfileState;
    googleProfile: fromGoogleProfile.GoogleProfileState;
};

export default compose(combineReducers)({
    //reflections: reflectionsReducer,
    user: userReducer,
    profile: profileReducer,
    googleProfile: googleProfileReducer
});