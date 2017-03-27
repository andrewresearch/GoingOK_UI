/**
 * Created by andrew on 6/06/2016.
 */

import {Component} from '@angular/core';
import {GoogleSignInSuccess} from 'angular-google-signin';
import {DataService} from '../DataService';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({    //Main directive loaded in index
    selector: 'login',
    providers: [DataService],
    templateUrl: 'login.component.html',
    styles: ['login.component.css']
})

export class LoginComponent {

    constructor (private dataService: DataService) {}

    private myClientId: string = '1049767681335-rvm76el8aspacomur42uch1v0amgca5s.apps.googleusercontent.com';

    public signedIn():boolean {
        return this.dataService.isSignedIn();
    }

    public signInValue = this.signedIn();


    // var myWidth = 100;
    // var myTheme = '';
    // var myScope = '';
    // var myLongTitle = 'GoingOK';

    public onGoogleSignInSuccess(event: GoogleSignInSuccess) {
        try {
            let googleUser: gapi.auth2.GoogleUser = event.googleUser;
            let id: string = googleUser.getId();
            let profile: gapi.auth2.BasicProfile = googleUser.getBasicProfile();
            console.log('ID: ' +
                profile
                    .getId()); // Do not send to your backend! Use an ID token instead.
            console.log('Name: ' + profile.getName());
            console.log('Email:' + profile.getEmail());
            console.log('Image:' + profile.getImageUrl());
            let id_token = googleUser.getAuthResponse().id_token;
            console.log('id_token:' + id_token);
            this.dataService.setToken(id_token);
            this.dataService.getProfile()
            //this.dataService.authorise(id_token)
            //console.log('authResult: '+authResult);
            /*if (!authResult) {
             this.dataService.getProfile(authResult);
             } else {
             console.log("Unable to retrieve profile")
             }*/
        }
        catch(e) {
            console.log("Unable to connect to Google API :"+e);
        }

    }

    public signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            auth2.disconnect()
            console.log('User signed out.');
        });
    }


}
