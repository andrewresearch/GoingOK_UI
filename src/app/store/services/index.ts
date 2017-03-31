/**
 * Created by andrew on 29/3/17.
 */


//import {HTTP_PROVIDERS} from '@angular/http';

import {UserService} from './user.service';
import {ReflectionsService} from './reflections.service';

export {
    UserService,
    ReflectionsService
};

export default [
    //HTTP_PROVIDERS,
    UserService,
    ReflectionsService
];