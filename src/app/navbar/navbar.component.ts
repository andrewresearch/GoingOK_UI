/**
 * Created by andrew on 6/06/2016.
 */

import {Component} from '@angular/core';
import {LoginComponent} from '../shared/login/login.component'

@Component({    //Main directive loaded in index
    selector: 'navbar',
    providers: [LoginComponent],
    templateUrl: 'navbar.component.html',
    styles: ['navbar.component.css']
})

export class NavbarComponent {
    loginButtonText = 'login'
    demoButtonText = 'demo'
}
