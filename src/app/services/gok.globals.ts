/**
 * Created by andrew on 30/3/17.
 */

export namespace Gok {
    //URLs
    //export const API_URL = 'http://api.goingok.org/v1';
    export const API_URL = 'http://localhost:8080/v1';
    export const USER_URL = API_URL + '/user';
    export const AUTH_URL = API_URL + '/client/auth';
    export const REFLECTIONS_URL = API_URL + '/client/profile';
    export const REFLECTION_ENTRY_URL = REFLECTIONS_URL + '/entry';
    //Headers
    export const SET_AUTH_HEADER = "Set-Authorization";
    export const AUTH_HEADER = "Authorization";
}