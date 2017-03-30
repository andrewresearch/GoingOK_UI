/**
 * Created by andrew on 3/3/17.
 */

import { Injectable }     from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {User} from '../models';


@Injectable()
export class ReflectionsService {


    constructor (private http: Http) {

    }

    private API_URL = 'http://localhost:8080/v1';
    private  USER_URL = this.API_URL + '/user';

    getReflections(id): Observable<User> {
        return this.http.get(this.USER_URL+'/'+ id)
            .map(res => res.json());
    }

    // saveReflections(user) {
    //     if (user.id === 0) {
    //         return this.http.post(this.USER_URL, user)
    //             .map(res => res.json());
    //     } else {
    //         return this.http.put(this.USER_URL+'/' + user.id, user)
    //             .map(res => res.json());
    //     }
    // }
    //
    // deleteUser(user) {
    //     return this.http.delete(this.USER_URL+'/' + user.id)
    //         .map(res => user);
    // }


    // private gokSession:string = "";
    // private gidToken:string = "";
    // private SET_AUTH = "Set-Authorization"
    // private AUTH = "Authorization"
    // private authHeader = new Headers();
    //
    // public setToken(token:string) { this.gidToken = token }
    //
    // public isSignedIn() { return (this.gidToken!="")}
    //
    // private setSession(session:string) {
    //     this.gokSession = session;
    //     this.authHeader.append(this.AUTH, session);
    // }
    //
    // private postToServer(subpath:String,str:String) { return this.http.post(this.API_URL + subpath,str) }
    //
    // private getFromServer(subpath:String) {
    //     let options = new RequestOptions({ headers: this.authHeader });
    //     return this.http.get(this.API_URL + subpath,options)
    // }
    //
    // private authorise() { return this.postToServer('/client/auth', this.gidToken) }
    //
    // private profile():Observable<Response> { return this.getFromServer('/client/profile') }
    //
    // public getProfile() {
    //
    //     if(this.gokSession=="") {
    //         console.log("No session string, authenticating with GoingOK server...");
    //         this.authorise().subscribe( (response:Response) => {
    //             if (response.headers.has(this.SET_AUTH)) {
    //                 this.setSession(response.headers.get(this.SET_AUTH));
    //                 console.log("Session set to: "+this.gokSession);
    //                 this.profile().subscribe( res =>
    //                     console.log(res.json())
    //                     //data => console.log("data: "+data..toString())
    //
    //                 );
    //                 return true;
    //             } else {
    //                 return false;
    //             }
    //         });
    //     } else {
    //         console.log("Already authenticated, fetching profile...");
    //         return this.profile().subscribe(
    //             data => console.log("data: "+data.toString())
    //         )
    //         //return false;
    //     }
    //
    // }


}


