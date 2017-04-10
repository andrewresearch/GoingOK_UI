
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { T2tComponent } from './projects/t2t/t2t.component';
import { ProfileComponent } from './profile/profile.component';
//import {AppComponent} from "./app.component";
import {AboutComponent} from "./about/about.component";
import {PageNotFoundComponent} from "./message/pageNotFound/pageNotFound.component";
import {AuthGuard} from "./services";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
    { path: 'projects', component: ProjectsComponent},
    { path: 'projects/transition2teaching', component: T2tComponent },
    { path: 'profile',component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'errors/404', component: PageNotFoundComponent },
    { path: '**', component: PageNotFoundComponent }
];

// - Updated Export
export const ROUTING = RouterModule.forRoot(routes);
