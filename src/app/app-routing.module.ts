import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard } from './helpers/auth..guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
// import { HomePageComponent } from './home-page/home-page.component';
import { JobAnnouncementsComponent } from './job-announcements/job-announcements.component';
import { ProfilPageComponent } from './profil-page/profil-page.component';
import { MyAnnouncesComponent } from './my-announces/my-announces.component';
import { MyAppliesComponent } from './my-applies/my-applies.component';
import { MyApplicantsComponent } from './my-applicants/my-applicants.component';
import { AnnouncementDetailsComponent } from './announcement-details/announcement-details.component';


const routes: Routes = [
  {
    path: '',
    component: JobAnnouncementsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
     path: 'profile',
   component: ProfilPageComponent 
  },
   { 
    path: 'my-announces',
    component: MyAnnouncesComponent,
     data: { title: 'My Announces'}
     },
  { 
    path: 'my-applies',
   component: MyAppliesComponent, 
   data: { title: 'My Applies', showSidebar: true }
   },
  { 
    path: 'my-applicants', 
  component: MyApplicantsComponent, 
  data: { title: 'My Applicants'} 
},
{
   path: 'announcement-details/:id',
 component: AnnouncementDetailsComponent,
data: {title: 'Announce Details', showSidebar: true} }


];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}