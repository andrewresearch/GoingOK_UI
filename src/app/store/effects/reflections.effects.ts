/**
 * Created by andrew on 29/3/17.
 */

import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';

import {AppState} from '../reducers';
import {ReflectionsActions} from '../actions';
import {ReflectionsService} from '../services';

@Injectable()
export class ReflectionsEffects {
    constructor (
        private update$: Actions,
        private reflectionsActions: ReflectionsActions,
        private reflectionsService: ReflectionsService,
    ) {}

@Effect() getReflections$ = this.update$
    .ofType(ReflectionsActions.GET_REFLECTIONS)
    .map(action => action.payload)
    .switchMap(id => this.reflectionsService.getReflections(id))
    .map(reflections => this.reflectionsActions.getReflectionsSuccess(reflections));

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