import { ProfileService } from './../../../services/profile.service';
import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile.interface';

@Component({
  selector: 'app-profile-obs-list',
  templateUrl: './profile-obs-list.component.html',
  styleUrls: ['./profile-obs-list.component.css']
})
export class ProfileObsListComponent implements OnInit {

  profiles: Profile[] = [];
  is_ascending: boolean = false;

  constructor(private profileService: ProfileService) {
    // this.profiles = this.profileService.profiles;
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.profileService.profiles.subscribe(profiles => {
      this.profiles = profiles;
    });
  }

  sort() {
    console.log('SORT');
    this.is_ascending = !this.is_ascending;
    if (this.is_ascending) {
      this.profiles = this.profiles.sort((a: Profile, b: Profile) => a.firstname.localeCompare(b.firstname));
    } else {
      this.profiles = this.profiles.sort((a: Profile, b: Profile) => b.firstname.localeCompare(a.firstname));
    }
  }
}
