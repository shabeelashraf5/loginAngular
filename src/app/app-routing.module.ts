import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './users/signup/signup.component';
import { LoginComponent } from './users/login/login.component';
import { HomepageComponent } from './users/homepage/homepage.component';
import { ProfilepageComponent } from './users/profilepage/profilepage.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  {path: 'login', component: LoginComponent},
  { path:'homepage', component: HomepageComponent},
  {path: 'profile', component: ProfilepageComponent},
  {path:'admin', component: AdminloginComponent},
  {path:'admin/dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
