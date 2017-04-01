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
        authorised: false,
        session: "",
        gToken: ""
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
        this.authInfo.gToken = gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().id_token;
        this.updateGoogleProfile(profile);
        //this.logProfileToConsole(profile);
        //Now authorise with GoingOK server if necessary
        this.authInfo.signedIn = true;
        if(!this.authInfo.authorised || (this.authInfo.session=="")) {
            this.goingOkAuthorisation()
        }
        return profile;
    }

    signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut();
        this.authInfo.signedIn = false;
        if(this.authInfo.authorised || !(this.authInfo.session=="")) {
            this.authInfo.session = "";
            this.authInfo.authorised = false;
        }
    }

    ngOnInit() {

    }
    ngAfterContentInit() {

    }

    goingOkAuthorisation() {
        console.log("<<<< GOINGOK AUTH >>>>");
        this.store.dispatch(this.uActions.authUser(this.authInfo.gToken));
        this.authInfo.authorised = true;
    }



    updateGoogleProfile(profile) {
        console.log("... updating Google Profile in store ...");
        let gp = new GoogleProfile();
        gp.id = profile.getId();
        gp.name = profile.getName();
        gp.email = profile.getEmail();
        gp.image_url = profile.getImageUrl();
        this.store.dispatch(this.gpActions.saveProfile(gp));
    }



    logProfileToConsole(profile) {
        // console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());
    }

}