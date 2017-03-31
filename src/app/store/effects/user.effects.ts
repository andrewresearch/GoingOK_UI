/**
 * Created by andrew on 29/3/17.
 */

import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';

import {AppState} from '../reducers';
import {UserActions} from '../actions';
import {UserService} from '../services';

@Injectable()
export class UserEffects {
    constructor (
        private update$: Actions,
        private userActions: UserActions,
        private userService: UserService,
    ) {}

    // @Effect() checkConnect$ = this.update$
    //     .ofType(UserActions.CHECK_CONNECT)
    //     .switchMap(() => this.userService.checkConnect())
    //     .map(result => this.userActions.checkConnectResult(result));

    // @Effect() authUser$ = this.update$
    //     .ofType(UserActions.AUTH_USER)
    //     .map(action => action.payload)
    //     .switchMap(token => this.userService.authUser(token))
    //     .map(userResponse => this.userActions.getUserSuccess(userResponse));

}