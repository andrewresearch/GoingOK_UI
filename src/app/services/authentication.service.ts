/**
 * Created by andrew on 31/3/17.
 */

import {ChangeDetectorRef, Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {AppState} from "../store/reducers";
import {GoogleProfile,User} from "../store/models";
import {GoogleProfileActions,UserActions} from "../store/actions";
import {Observable} from "rxjs";

declare var gapi: any;

@Injectable()
export class AuthenticationService {

    private gStore: Observable<GoogleProfile> ;
    private uStore: Observable<User>;

    public myClientId: string = '1049767681335-rvm76el8aspacomur42uch1v0amgca5s.apps.googleusercontent.com'; //TODO Send this programatically rather than metatag in index.html

    public   authInfo = {
        signedIn: false,
        authorised: false
    }



    constructor(
        private store: Store<AppState>,
        private gpActions: GoogleProfileActions,
        private uActions:UserActions
    ) {
        this.gStore = store.select('googleProfile');
        this.uStore = store.select('user');
    }


    onSignIn(googleUser) {
        let profile = googleUser.getBasicProfile();
        //this.logProfileToConsole(profile);
        this.authInfo.signedIn = true;
        return profile;
    }

    signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut();
        this.authInfo.signedIn = false;
    }

    ngOnInit() {

    }
    ngAfterContentInit() {

    }

    goingOkAuthorisation() {
        console.log("<<<< GOINGOK AUTH >>>>");
        //this.store.dispatch(this.uActions.authUser(this.googleToken()));
    }

    // googleToken():string {
    //     return this.gUser.getAuthResponse().id_token;
    // }
    //
    // updateGoogleProfile() {
    //     console.log("... updating Google Profile in store ...");
    //     let gp = new GoogleProfile();
    //     gp.id = this.gProfile.getId();
    //     gp.name = this.gProfile.getName();
    //     gp.email = this.gProfile.getEmail();
    //     gp.image_url = this.gProfile.getImageUrl();
    //     gp.token = this.googleToken();
    //     this.store.dispatch(this.gpActions.saveProfile(gp));
    // }
    //


    logProfileToConsole(profile) {
        // console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());
    }

}