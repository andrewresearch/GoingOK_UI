/**
 * Created by andrew on 29/3/17.
 */

import { Injectable }     from '@angular/core';
import { CanActivate }    from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate() {
        console.log('AuthGuard#canActivate called');
        return true; //TODO This needs to be implemented
    }
}