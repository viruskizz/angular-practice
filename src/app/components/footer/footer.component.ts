import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  author = 'Araiva';
  credit = 'https://www.fandomspot.com/'
  constructor() { }

  ngOnInit(): void {
  }

}
