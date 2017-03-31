/**
 * Created by andrew on 29/3/17.
 */

import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';

import {ReflectionsActions} from '../actions';
import {ReflectionsService} from '../services';

@Injectable()
export class ReflectionsEffects {
    constructor (
        private update$: Actions,
        private reflectionsActions: ReflectionsActions,
        private reflectionsService: ReflectionsService,
    ) {}

    // @Effect() saveReflectionEntry$ = this.update$
    //     .ofType(ReflectionsActions.ADD_REFLECTION)
    //     .map(action => action.payload)
    //     .switchMap(entry => this.reflectionsService.saveReflectionEntry(entry,"dummy_token"))
    //     .map(result => this.reflectionsActions.saveEntryResult(result));
    //
    // @Effect() getReflections$ = this.update$
    //     .ofType(ReflectionsActions.GET_REFLECTIONS)
    //     .switchMap(() => this.reflectionsService.getReflections())
    //     .map(result => this.reflectionsActions.getReflectionsSuccess(result));

}