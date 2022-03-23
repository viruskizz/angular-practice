import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/interfaces/profile.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() profile: Profile;

  constructor(private router: Router) {
    this.profile = {
      id: 0,
      imgUrl: '',
      series: 'FF',
      firstname: 'Unknown',
      lastname: 'Unknown',
    }
  }

  ngOnInit(): void {
  }

  goto(id: number) {
    this.router.navigate(['/profile/' + id], {
      queryParams: {
        // id: 1
      }
    });
    console.log('Goto');
  }
}
