/**
 * Created by andrew on 6/06/2016.
 */

import {AfterViewInit, ChangeDetectorRef, Component} from '@angular/core';
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

export class ProfileComponent implements AfterViewInit {

    private user: Observable<User>;
    private reflections: Observable<Reflections>;

    private DEVELOPER_MODE = false;

    constructor(
        private store: Store<AppState>,
        private userActions: UserActions,
        private reflectionsActions: ReflectionsActions,
        private authService: AuthenticationService,
        private cdr: ChangeDetectorRef
        //private router: Router
    ) {
        this.user = store.select('user');
        this.reflections = store.select('reflections');
    }

    ngAfterViewInit() {
        this.updateReflections();
    }

    // ngDoCheck() {
    //     //TODO This is a problem. Need to find another way of updating reflections.
    //     // if(!(this.isAuthorised && this.authService.authInfo.authorised)) {
    //     //     this.isAuthorised = this.authService.authInfo.authorised;
    //     //     if(this.isAuthorised) {
    //     //         this.updateReflections();
    //     //     }
    //     // }
    // }

    public updateReflections() {
        console.log("Updating reflections...")
        this.store.dispatch(this.reflectionsActions.getReflections());
    }

    onNotify(ref:Reflection):void {
        //this.currentReflection = ref;
        let entry = new ReflectionEntry();
        entry.reflection = ref;
        //console.log("Notify message: "+JSON.stringify(entry));
        this.store.dispatch(this.reflectionsActions.addReflection(entry));
    }


    public selectedResearch() {
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


    //-------- DEV_MODE FUNCTIONS -----------//

    public toggleDevMode() {
        this.DEVELOPER_MODE = !this.DEVELOPER_MODE;
        console.log("DEV_MODE: "+this.DEVELOPER_MODE);
    }

    public loadDummy() {
        this.store.dispatch(this.reflectionsActions.loadDummy());
        console.log("DEV_MODE: Loaded dummy data into the store");
    }

    toggleSignIn() {
        this.authService.authInfo.signedIn = !this.authService.authInfo.signedIn;
        console.log("DEV_MODE: Toggled authInfo.signIn to "+this.authService.authInfo.signedIn);
    }
    toggleAuthorised() {
        this.authService.authInfo.authorised = !this.authService.authInfo.authorised;
        console.log("DEV_MODE: Toggled authInfo.authorised to "+this.authService.authInfo.authorised);
    }

    public getAuthInfo():string {
        //console.log("DEV_MODE: authInfo ...");
        return JSON.stringify(this.authService.authInfo);
    }

    public getCurrentEntry():Observable<string> {
        //console.log("DEV_MODE: current entry ...");
        return this.reflections.map( refs => JSON.stringify(refs.currentEntry));
    }

    public getSelectedResearch():string {
        //console.log("DEV_MODE: selectedResearch ...");
        return JSON.stringify(this.selectedProject);
    }

    public getUser():Observable<string> {
        //console.log("DEV_MODE: this.user ...");
        return this.user.map( usr => JSON.stringify(usr));

    }

    public getReflections():Observable<string> {
        //console.log("DEV_MODE: this.reflections ...");
        return this.reflections.map( refs => JSON.stringify(refs.reflectionEntries));
    }






}
