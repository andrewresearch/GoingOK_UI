/**
 * Created by andrew on 6/06/2016.
 */

import {ChangeDetectorRef, Component, NgZone} from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";


declare var gapi: any;

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent {

    constructor(private zone: NgZone, private authService:AuthenticationService, private router: Router,private cdr:ChangeDetectorRef){}

    ngAfterViewInit() {
        //gapi.load('auth2', this.authService.googleInit);

        // gapi.signin2.render('my-signin2',{
        //     'onsuccess': param => this.onSignIn(param),
        //     'scope': 'profile email',
        //     'width': 240,
        //     'height': 50,
        //     'longtitle': true,
        //     'theme': 'light'
        // });
    }

    // googleInit = () => {
    //     console.info("About to initialise gapi...")
    //     gapi.auth2.init({
    //         client_id: '1049767681335-rvm76el8aspacomur42uch1v0amgca5s.apps.googleusercontent.com'
    //     }).then(
    //         function onInit() {
    //             console.info("Google Auth successfully initialised")
    //             let authInst = gapi.auth2.getAuthInstance()
    //             authInst.signIn(
    //                 {
    //                     scope: 'profile email',
    //                     prompt: 'select_account'
    //                 }
    //             ).then(
    //                 function success() {
    //                     console.info("Successfully signed in user:")
    //                 },
    //                 function error(err) {
    //                     console.error("There was a problem signing in the user"+err)
    //                 }
    //             )
    //             //console.info("Auth instance: ")
    //         },
    //         function onError(err){
    //             console.error("GoingOK Error: "+err)
    //         })
    // }

    // onSignIn(googleUser) {
    //     let profileResult = this.authService.onSignIn(googleUser);
    // };



}
