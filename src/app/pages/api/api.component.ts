import { GhibliService } from './../../services/ghibli.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  flims: any[] = [];
  constructor(private ghibliService: GhibliService) { }

  ngOnInit(): void {
    this.ghibliService.getFilm().subscribe(res => {
      console.log(res);
      this.flims = res;
    })
  }
}
