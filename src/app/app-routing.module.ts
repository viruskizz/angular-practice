import { ProfileDashboardComponent } from './pages/profile-dashboard/profile-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ApiComponent } from './pages/api/api.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'api', component: ApiComponent},
    {path: 'profile', children: [
        {
          path: '', component: ProfileDashboardComponent
        },
        {
          path: ':id', component: ProfileComponent
        }
      ]
    }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
