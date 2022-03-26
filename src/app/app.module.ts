import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TimerComponent } from './components/timer/timer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileDashboardComponent } from './pages/profile-dashboard/profile-dashboard.component';
import { ProfileFormComponent } from './pages/profile-dashboard/profile-form/profile-form.component';
import { ProfileListComponent } from './pages/profile-dashboard/profile-list/profile-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileObsListComponent } from './pages/profile-dashboard/profile-obs-list/profile-obs-list.component';
import { ApiComponent } from './pages/api/api.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListComponent,
    HomeComponent,
    ProfileComponent,
    TimerComponent,
    NavbarComponent,
    FooterComponent,
    ProfileDashboardComponent,
    ProfileFormComponent,
    ProfileListComponent,
    ProfileObsListComponent,
    ApiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
