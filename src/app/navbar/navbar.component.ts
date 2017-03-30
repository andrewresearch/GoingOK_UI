/**
 * Created by andrew on 6/06/2016.
 */

import {AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Output} from '@angular/core';
import {GoogleSignInSuccess} from 'angular-google-signin';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {UserActions} from "../store/actions/user.actions";
import {AppState} from "../store/reducers/index";
import {User} from "../store/models/User";
import {GoogleProfileActions} from "../store/actions/googleProfile.actions";
import {GoogleProfile} from "../store/models/GoogleProfile";
import {ReflectionsActions} from "../store/actions/reflections.actions";
import {Reflections} from "../store/models/Reflections";

@Component({    //Main directive loaded in index
    selector: 'navbar',
    //providers: [LoginComponent],
    templateUrl: 'navbar.component.html',
    styles: ['navbar.component.css']
})

export class NavbarComponent implements AfterViewInit {
    //loginButtonText = 'login'
    //demoButtonText = 'demo'

    user: Observable<User>;
    reflections: Observable<Reflections>;
    googleProfile: Observable<GoogleProfile>;
    private myClientId: string = '1049767681335-rvm76el8aspacomur42uch1v0amgca5s.apps.googleusercontent.com';

    connectionIssues(): boolean {
        return !navigator.onLine
    }

    constructor(
        private ref: ChangeDetectorRef,
        private store: Store<AppState>,
        private userActions: UserActions,
        private reflectionsActions: ReflectionsActions,
        private googleProfileActions: GoogleProfileActions
        //private router: Router
    ) {
        this.user = store.select('user');
        this.reflections = store.select('reflections');
        this.googleProfile = store.select('googleProfile');
    }

    ngAfterViewInit() {}


    public onGoogleSignInSuccess(event: GoogleSignInSuccess) {
        try {
            let googleUser: gapi.auth2.GoogleUser = event.googleUser;
            let profile: gapi.auth2.BasicProfile = googleUser.getBasicProfile();
            let id_token = googleUser.getAuthResponse().id_token;
            this.store.dispatch(this.userActions.signedIn(id_token));
            let gProfile = new GoogleProfile();
            gProfile.id = profile.getId();
            gProfile.name = profile.getName();
            gProfile.email = profile.getEmail();
            gProfile.image_url = profile.getImageUrl();
            gProfile.token = id_token;
            this.store.dispatch(this.googleProfileActions.saveProfile(gProfile));
            this.ref.detectChanges();
            this.store.dispatch(this.userActions.authUser(id_token));

            setTimeout(this.updateReflections, 1000);

            //console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
            //console.log('Name: ' + profile.getName());
            //console.log('Email:' + profile.getEmail());
            //console.log('Image:' + profile.getImageUrl());
            //console.log('id_token:' + id_token);

        }
        catch(e) {
            console.log("Unable to connect to Google API :"+e);
            //this.connectionIssues = true;
        }

    }

    updateReflections = () => {
        this.store.dispatch(this.reflectionsActions.getReflections());
        this.ref.detectChanges();
    }

    public signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            auth2.disconnect();
            console.log('User signed out.');
        });
        this.store.dispatch(this.userActions.signedOut());
        this.store.dispatch(this.reflectionsActions.resetReflections());
        this.store.dispatch(this.googleProfileActions.resetProfile());
        this.ref.detectChanges();
    }

}
