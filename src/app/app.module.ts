import { TokenInterceptor } from './helpers/token.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


//import { HomePageComponent } from './home-page/home-page.component';
import { JobAnnouncementsComponent } from './job-announcements/job-announcements.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProfilPageComponent } from './profil-page/profil-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MyAnnouncesComponent } from './my-announces/my-announces.component';
import { MyAppliesComponent } from './my-applies/my-applies.component';
import { MyApplicantsComponent } from './my-applicants/my-applicants.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnnouncementDetailsComponent } from './announcement-details/announcement-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    // HomePageComponent,
    JobAnnouncementsComponent,
    ProfilPageComponent,
    SidebarComponent,
    MyAnnouncesComponent,
    MyAppliesComponent,
    MyApplicantsComponent,
    AnnouncementDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
   CommonModule,
   RouterModule
  ],
  providers: [
   
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}