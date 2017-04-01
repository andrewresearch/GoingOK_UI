/**
 * Created by andrew on 29/3/17.
 */

import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';


import {AppState} from '../reducers';
import {UserActions} from '../actions';
import {UserService} from '../../services';

@Injectable()
export class UserEffects {
    constructor (
        private action$: Actions,
        private userActions: UserActions,
        private userService: UserService,
    ) {}

    @Effect() authUser$ = this.action$
        .ofType(UserActions.AUTH_USER)
        .map(action => {console.log("IN EFFECT!!"); return action.payload})
        .switchMap((token:string) => this.userService.authUser(token))
        .map(userResponse => this.userActions.getUserSuccess(userResponse));

    // @Effect() checkConnect$ = this.update$
    //     .ofType(UserActions.CHECK_CONNECT)
    //     .switchMap(() => this.userService.checkConnect())
    //     .map(result => this.userActions.checkConnectResult(result));
}