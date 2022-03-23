import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { profiles } from '../../mocks';
import {Profile} from '../../interfaces/profile.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  title = 'Characters'
  profile: Profile = {
    id: 0,
    imgUrl: 'https://waytoomany.games/wp-content/uploads/2020/04/Final-Fantasy-Wallpaper.jpg',
    series: '',
    firstname: '',
    lastname: '',
    description: ''
  }
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    const id = +params.id;
    console.log(id);
    const profile = this.getProfile(id);
    if (profile) {
      this.title = profile?.firstname + ' ' + profile?.lastname;
      this.profile = profile;
    }
    console.log(this.profile);
  }

  getProfile(id: number): Profile | undefined {
    console.log(profiles);
    return profiles.find(p => p.id === id);
  }
}
