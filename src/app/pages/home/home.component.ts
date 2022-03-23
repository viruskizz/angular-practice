import { Component, OnInit } from '@angular/core';
import profiles from 'src/app/mocks/profiles';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Final Fantasy Characters'
  url = 'https://qph.fs.quoracdn.net/main-qimg-83572e408102c09eb588315186238f17';
  profiles = profiles.slice().sort(() => 0.5 - Math.random());
  constructor() {}

  ngOnInit(): void {
  }

  setNameStyle(i: any) {
    if (i % 2 === 0) {
      return {
        'color': 'red',
        'font-size': '18px',
      }
    } else {
      return {
        'color': 'blue',
        'font-size': '16px',
      }
    }
  }
}
