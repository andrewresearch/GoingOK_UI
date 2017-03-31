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

        gapi.signin2.render('my-signin2', {
            'onsuccess': param => this.onSignIn(param),
            'scope': 'profile email',
            'width': 240,
            'height': 50,
            'longtitle': true,
            'theme': 'light'

        });
    }
    onSignIn(googleUser) {
        let profile = this.authService.onSignIn(googleUser);
        this.cdr.detectChanges();
        this.router.navigate(['profile']);
    };
    // signOut() {
    //     this.authService.signOut()
    //     this.fShowInfo = false;
    // }


}
