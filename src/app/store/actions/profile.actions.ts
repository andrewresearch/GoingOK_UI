
/**
 * Created by andrew on 3/4/17.
 */

import {Injectable} from "@angular/core";
import {Profile} from "../models/Profile";
import {Action} from "@ngrx/store";

@Injectable()
export class ProfileActions {

    static LOAD_DUMMY = '[Profile] Load Dummy';
    static GET_PROFILE = '[Profile] Get Profile';
    static GET_PROFILE_SUCCESS = '[Profile] Get Profile Success';
    static RESET_PROFILE = '[Profile] Reset Profile';


    getProfile(): Action {
        return {
            type: ProfileActions.GET_PROFILE
        };
    }


    getProfileSuccess(profile): Action {
        return {
            type: ProfileActions.GET_PROFILE_SUCCESS,
            payload: profile
        };
    }

    resetProfile(): Action {
        return {
            type: ProfileActions.RESET_PROFILE
        };
    }

    loadDummy(): Action {
        return {
            type: ProfileActions.LOAD_DUMMY
        };
    }
}
