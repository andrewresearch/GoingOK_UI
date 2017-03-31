/**
 * Created by andrew on 31/3/17.
 */

import {Injectable} from "@angular/core";
import {GoogleSignInSuccess} from "angular-google-signin";
import {Store} from "@ngrx/store";
import {AppState} from "../store/reducers";
import {GoogleProfile,User} from "../store/models";
import {GoogleProfileActions,UserActions} from "../store/actions";
import {Observable} from "rxjs";

@Injectable()
export class AuthenticationService {

    private gUser: gapi.auth2.GoogleUser;
    private gProfile: gapi.auth2.BasicProfile;
    private gStore: Observable<GoogleProfile> ;
    private uStore: Observable<User>;

    public   authInfo = {
        signedIn: true,
        authorised: true
    }

    constructor(
        private store: Store<AppState>,
        private gpActions: GoogleProfileActions,
        private uActions:UserActions
    ) {
        this.gStore = store.select('googleProfile');
        this.uStore = store.select('user');
    }

    isSignedIn() {
        console.log("... check signed in ...");
        //return (this.gUser !=null && this.gUser.isSignedIn());
        return true;
    }

    isAuthorised() {
        console.log("... check authorised ...");
        return true;
    }

    isLoggedIn() {
        console.log("... check logged in ...");
        //return (this.isSignedIn && this.isAuthorised());
        return true;
    }

    googleSignIn(event: GoogleSignInSuccess) {
        console.log("<<<< GOOGLE SIGN-IN >>>>");
        this.gUser  = event.googleUser;
        //this.isSignedIn = this.gUser.isSignedIn();
        this.gProfile = this.gUser.getBasicProfile();
        this.gStore.map( gp => {
            if(gp.id!=this.gProfile.getId()) {
                console.log("!!! Google ID has changed !!!");
                //this.goingOkAuthorisation();
                //this.updateGoogleProfile();
            }
        });
    }

    goingOkAuthorisation() {
        console.log("<<<< GOINGOK AUTH >>>>");
        this.store.dispatch(this.uActions.authUser(this.googleToken()));
    }

    googleToken():string {
        return this.gUser.getAuthResponse().id_token;
    }

    updateGoogleProfile() {
        console.log("... updating Google Profile in store ...");
        let gp = new GoogleProfile();
        gp.id = this.gProfile.getId();
        gp.name = this.gProfile.getName();
        gp.email = this.gProfile.getEmail();
        gp.image_url = this.gProfile.getImageUrl();
        gp.token = this.googleToken();
        this.store.dispatch(this.gpActions.saveProfile(gp));
    }

    signOut() {
        //this.common.signInStatus = false;
        // var auth2 = gapi.auth2.getAuthInstance();
        // auth2.signOut().then(function () {
        //     auth2.disconnect();
        //     console.log('User signed out.');
        // });
        // //this.store.dispatch(this.userActions.signedOut());
        // //this.store.dispatch(this.reflectionsActions.resetReflections());
        // this.store.dispatch(this.gpActions.resetProfile());
    }

}