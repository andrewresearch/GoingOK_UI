/**
 * Created by andrew on 3/3/17.
 */

import { Injectable }     from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

import {User, UserResponse} from "../models";
import {Gok} from './gok.globals';
import {Common} from "../../shared/common";


@Injectable()
export class UserService {

    constructor (private http: Http, private common:Common) {}

    authUser(token): Observable<UserResponse> {
        console.log("Authorising user");
        return this.http.post(Gok.AUTH_URL,token)
            .map(this.sessionAndUser);
    }

    sessionAndUser = (response:Response): UserResponse => {
        console.log("Extracting session and user data from response");
        let ur:UserResponse = response.json()
        if (response.headers.has(Gok.SET_AUTH_HEADER)) {
            let session = response.headers.get(Gok.SET_AUTH_HEADER);
            console.log("Session is: " + session);
            this.common.session = session;
            ur.session = session;
        } else {
            console.log("No Session provided");
        }

        return ur;
    }

}


