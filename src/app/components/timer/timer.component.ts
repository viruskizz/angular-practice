import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  timer: any;
  time = 0;

  constructor() {
    this.timer = setInterval(() => {
      this.time++;
    }, 1000);
  }

  ngOnInit(): void {
  }

  reset(name: any) {
    console.log('RESET: ', name);
    this.time = 0;
  }
}
