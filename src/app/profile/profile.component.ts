/**
 * Created by andrew on 6/06/2016.
 */

import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

import {EntryComponent} from './entry/entry.component';
import {ReflectionChartComponent} from './reflectionChart/reflectionChart.component';
//import { DropdownModule } from 'ng2-bootstrap';

import {AppState} from "../store/reducers";
import {ReflectionsActions, UserActions} from "../store/actions";

import {User} from "../store/models/User";
import {Reflection, ReflectionEntry, Reflections} from "../store/models/Reflections";
import {AuthenticationService} from "../services/authentication.service";

@Component({
    selector: 'profile',
    providers: [EntryComponent,ReflectionChartComponent], //,DropdownModule],
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css'],
})

export class ProfileComponent {

    user: Observable<User>;
    reflections: Observable<Reflections>;

    currentReflection: Reflection = new Reflection();

    newUser: boolean = false;

    constructor(
        private store: Store<AppState>,
        private userActions: UserActions,
        private reflectionsActions: ReflectionsActions,
        private authService: AuthenticationService
        //private router: Router
    ) {
        this.user = store.select('user');
        this.reflections = store.select('reflections');
    }


    toggleSignIn() {
        this.authService.authInfo.signedIn = !this.authService.authInfo.signedIn
    }
    toggleAuthorised() {
        this.authService.authInfo.authorised = !this.authService.authInfo.authorised
    }


    public newUserDone() {
        this.newUser = false;
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

    selectedResearch() {
        return this.selectedProject.code + "-" +
                this.selectedOrg.code + "-" +
                this.selectedCohort.code
    }
    selectedProject = { name: "None", code: "000" }
    selectedOrg = { name: "None", code: "000" }
    selectedCohort = { name: "None", code: "000" }

    research = {
        projects: [
            {
                name: "None",
                code: "000",
                organisations: [
                    {
                        name: "None",
                        code: "000",
                        cohorts: [
                            {
                                name: "None",
                                code: "000"
                            }
                        ]
                    }
                ]
            },
            {
                name: "Transition to Teaching",
                code: "T2T",
                organisations: [
                    {
                        name: "Queensland University of Technology",
                        code: "QUT",
                        cohorts: [
                            {
                                name: "GradDip (Sec)",
                                code: "001"
                            },
                            {
                                name: "BTeach (Prim) 4th Year",
                                code: "002"
                            }
                        ]
                    },
                    {
                        name: "University of Technology Sydney",
                        code: "UTS",
                        cohorts: [
                            {
                                name: "UTS Cohort 1",
                                code: "001"
                            },
                            {
                                name: "UTS Cohort 2",
                                code: "002"
                            }
                        ]
                    }
                ]
            }
        ]
    }

}
