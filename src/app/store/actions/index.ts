/**
 * Created by andrew on 29/3/17.
 */

import {UserActions} from './user.actions';
//import {ReflectionsActions} from './reflections.actions';
import {GoogleProfileActions} from './googleProfile.actions';
import {ProfileActions} from "./profile.actions";
export {
    UserActions,
    ProfileActions,
  //  ReflectionsActions,
    GoogleProfileActions
};

export default [
    UserActions,
    ProfileActions,
    //ReflectionsActions,
    GoogleProfileActions
];