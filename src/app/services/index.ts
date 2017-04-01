/**
 * Created by andrew on 1/4/17.
 */


import {AuthGuard} from "./authguard.service";
import {ReflectionsService} from "./reflections.service";
import {UserService} from "./user.service";
import {AuthenticationService} from "./authentication.service";

export {
    AuthenticationService,
    AuthGuard,
    UserService,
    ReflectionsService
}

export default [
    AuthenticationService,
    AuthGuard,
    UserService,
    ReflectionsService
]