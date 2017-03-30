
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { T2tComponent } from './projects/t2t/t2t.component';
import { ProfileComponent } from './profile/profile.component';
//import {AppComponent} from "./app.component";
import {AboutComponent} from "./about/about.component";
import {PageNotFoundComponent} from "./message/pageNotFound/pageNotFound.component";
import {AuthGuard} from "./shared/AuthGuardService";

const routes: Routes = [
    { path: 'projects/transition2teaching', component: T2tComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'profile',component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'about', component: AboutComponent },
    { path: '', component: AboutComponent },
    { path: 'errors/404', component: PageNotFoundComponent },
    { path: '**', component: PageNotFoundComponent }
];

// - Updated Export
export const ROUTING = RouterModule.forRoot(routes);
