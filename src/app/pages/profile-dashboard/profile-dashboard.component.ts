import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile.interface';
import { profiles } from 'src/app/mocks';

@Component({
  selector: 'app-profile-dashboard',
  templateUrl: './profile-dashboard.component.html',
  styleUrls: ['./profile-dashboard.component.css']
})
export class ProfileDashboardComponent implements OnInit {

  profile: Profile | undefined;
  constructor() {}

  ngOnInit(): void {
  }

  getSubmit(profile: Profile) {
    console.log('PROFILE: ', profile);
    this.profile = profile;
  }
}
