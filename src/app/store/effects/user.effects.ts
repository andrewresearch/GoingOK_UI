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

    @Effect() checkConnect$ = this.update$
        .ofType(UserActions.CHECK_CONNECT)
        .switchMap(() => this.userService.checkConnect())
        .map(result => this.userActions.checkConnectResult(result));

    @Effect() authUser$ = this.update$
        .ofType(UserActions.AUTH_USER)
        .map(action => action.payload)
        .switchMap(token => this.userService.authUser(token))
        .map(user => this.userActions.getUserSuccess(user));
//
// @Effect() saveHero$ = this.update$
//     .ofType(UserActions.SAVE_HERO)
//     .map(action => action.payload)
//     .switchMap(hero => this.svc.saveHero(hero))
//     .map(hero => this.heroActions.saveHeroSuccess(hero));
//
// @Effect() addHero$ = this.update$
//     .ofType(UserActions.ADD_HERO)
//     .map(action => action.payload)
//     .switchMap(hero => this.svc.saveHero(hero))
//     .map(hero => this.heroActions.addHeroSuccess(hero));
//
// @Effect() deleteHero$ = this.update$
//     .ofType(UserActions.DELETE_HERO)
//     .map(action => action.payload)
//     .switchMap(hero => this.svc.deleteHero(hero))
//     .map(hero => this.heroActions.deleteHeroSuccess(hero));
}