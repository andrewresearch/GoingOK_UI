//System level imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { AlertModule } from 'ng2-bootstrap'; //Demo for ng2-bootstrap
import { ROUTING } from './app.routes';

//Shared
import {AuthGuard} from './shared/AuthGuardService';
import {Common} from "./shared/common";

//ngrx
import { StoreModule } from '@ngrx/store';
import {EffectsModule} from "@ngrx/effects";
import reducer from './store/reducers';
import {UserActions,ReflectionsActions} from "./store/actions";
import {UserService,ReflectionsService} from "./store/services";
import {UserEffects,ReflectionsEffects} from "./store/effects";

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { LoginComponent } from './shared/login/login.component';
import { AboutComponent } from './about/about.component';

//Login
import {GoogleSignInComponent} from 'angular-google-signin';
//Profile
import { MessageComponent } from './message/message.component';
import { ProfileComponent } from './profile/profile.component';
import { EntryComponent } from './profile/entry/entry.component';
import { SliderComponent } from './profile/entry/slider/slider.component';
import { ReflectionChartComponent } from './profile/reflectionChart/reflectionChart.component';
import { ReflectionsComponent } from './profile/reflections/reflections.component';

//Projects
import {ProjectsComponent} from "./projects/projects.component";
import {T2tComponent} from "./projects/t2t/t2t.component";
import {PageNotFoundComponent} from "./message/pageNotFound/pageNotFound.component";
import {GoogleProfileActions} from "./store/actions/googleProfile.actions";







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    LoginComponent,
    ProfileComponent,
      MessageComponent,
      ReflectionChartComponent,
      EntryComponent,
      SliderComponent,
      GoogleSignInComponent,
      ReflectionsComponent,
      FooterComponent,
      ProjectsComponent,
      T2tComponent,
      PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(reducer),
    EffectsModule.run(UserEffects),
    EffectsModule.run(ReflectionsEffects)
    //AlertModule, //Demo for ng2-bootstrap
  ],
  providers: [Common,AuthGuard,UserActions,UserService,ReflectionsActions,ReflectionsService,GoogleProfileActions],
  bootstrap: [AppComponent]
})
export class AppModule {

}
