/**
 * Created by andrew on 6/06/2016.
 */

import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

import {EntryComponent} from './entry/entry.component';
import {ReflectionChartComponent} from './reflectionChart/reflectionChart.component'

import {AppState} from "../store/reducers";
import {ReflectionsActions, UserActions} from "../store/actions";

import {User} from "../store/models/User";
import {Reflection, ReflectionEntry, Reflections} from "../store/models/Reflections";

@Component({
    selector: 'profile',
    providers: [EntryComponent,ReflectionChartComponent],
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css'],
})

export class ProfileComponent {

    user: Observable<User>;
    reflections: Observable<Reflections>;

    currentReflection: Reflection = new Reflection();


    constructor(
        private store: Store<AppState>,
        private userActions: UserActions,
        private reflectionsActions: ReflectionsActions
        //private router: Router
    ) {
        this.user = store.select('user');
        this.reflections = store.select('reflections');
    }

    public getUser():Observable<User> {
        //return this.user.map( usr => JSON.stringify(usr));
        return this.user;
    }

    public getReflections():Observable<string> {
        return this.reflections.map( refs => JSON.stringify(refs));
    }

    public updateReflections() {
        this.store.dispatch(this.reflectionsActions.getReflections());
    }

    public getCurrentEntry():Observable<ReflectionEntry> {
        return this.reflections.map( refs => refs.currentEntry)
    }

    onNotify(ref:Reflection):void {
        //this.currentReflection = ref;
        let entry = new ReflectionEntry();
        entry.reflection = ref;
        console.log("Notify message: "+JSON.stringify(entry));
        this.store.dispatch(this.reflectionsActions.addReflection(entry));
    }

    public loadDummy() {
        console.log("Loading dummy data into the store")
        this.store.dispatch(this.reflectionsActions.loadDummy());
    }

}
