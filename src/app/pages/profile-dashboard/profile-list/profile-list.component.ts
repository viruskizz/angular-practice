import { profiles } from 'src/app/mocks';
import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile.interface';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  @Input() profile: Profile | undefined;
  profiles: Profile[] = [];
  is_ascending: boolean = false;

  constructor() {
    this.profiles = profiles;
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    if (changes.profile.currentValue) {
      this.profiles.unshift(changes.profile.currentValue);
    }
  }

  ngDoCheck(): void  {
    // console.log('ngDoCheck');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
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
