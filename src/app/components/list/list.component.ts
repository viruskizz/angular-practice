import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  drinks: string[] = [
    'Final Fantasy I',
    'Final Fantasy II',
    'Final Fantasy III',
    'Final Fantasy IV',
    'Final Fantasy V',
    'Final Fantasy VI',
    'Final Fantasy VII',
    'Final Fantasy VIII',
    'Final Fantasy IX',
    'Final Fantasy X',
    'Final Fantasy XI',
    'Final Fantasy XII',
    'Final Fantasy XIII',
    'Final Fantasy XIV',
    'Final Fantasy XV',
    'Final Fantasy Tactic',
  ];
  constructor() {}

  ngOnInit(): void {
  }

}
