import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Profile } from '../interfaces/profile.interface';
import { profiles } from '../mocks';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profiles = new BehaviorSubject<Profile[]>([]);

  constructor() {
    this.profiles.next(profiles);
  }

  add(profile: Profile) {
    const profiles = this.profiles.getValue();
    profiles.unshift(profile);
    this.profiles.next(profiles);
  }
}
