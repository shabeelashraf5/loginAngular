import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';
import { ProfilepageComponent } from './users/profilepage/profilepage.component';
import { HomepageComponent } from './users/homepage/homepage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { appReducer } from './store/app.state';
import { UsersEffects } from './users/signup/store/signup.effects';
import { LoginEffects } from './users/login/store/login.effects';
import { NavbarComponent } from './users/navbar/navbar.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { DashboardEffects } from './admin/dashboard/store/dashboard.effects';
 
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminLoginEffects } from './admin/adminlogin/store/adminlogin.effects';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfilepageComponent,
    HomepageComponent,
    NavbarComponent,
    AdminloginComponent,
    DashboardComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([UsersEffects, LoginEffects, DashboardEffects, AdminLoginEffects ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    FormsModule,
    HttpClientModule ,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
