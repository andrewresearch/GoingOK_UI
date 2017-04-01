//System level imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { AlertModule } from 'ng2-bootstrap'; //Demo for ng2-bootstrap
import { BsDropdownModule } from 'ng2-bootstrap';
import { ROUTING } from './app.routes';

//Shared
import {AuthGuard} from './services';
import {AuthenticationService} from './services/authentication.service';

//ngrx
import { StoreModule } from '@ngrx/store';
import {EffectsModule} from "@ngrx/effects";
import reducer from './store/reducers';
import {UserActions,ReflectionsActions} from "./store/actions";
import {UserService,ReflectionsService} from "./services";
import {UserEffects,ReflectionsEffects} from "./store/effects";

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';

//Login

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

//DevTools
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, LoginComponent, AboutComponent,
    ProfileComponent,ReflectionChartComponent, EntryComponent, SliderComponent, ReflectionsComponent,
    MessageComponent, PageNotFoundComponent,
    ProjectsComponent, T2tComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(reducer),
    EffectsModule.runAfterBootstrap(UserEffects),
    EffectsModule.runAfterBootstrap(ReflectionsEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    BsDropdownModule.forRoot()
  ],
  providers: [
      AuthGuard,AuthenticationService,
      UserActions,UserService,ReflectionsActions,ReflectionsService,GoogleProfileActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
