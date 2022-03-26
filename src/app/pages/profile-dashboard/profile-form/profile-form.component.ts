import { ProfileService } from './../../../services/profile.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Profile } from 'src/app/interfaces/profile.interface';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  form: FormGroup;
  @Output() submited = new EventEmitter<Profile>();

  constructor(private profileService: ProfileService) {
    this.form = new FormGroup({
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      lastname: new FormControl('', [Validators.required]),
      imgUrl: new FormControl('', [Validators.required]),
      series: new FormControl('', [this.ValidateSeries]),
    });
  }

  ngOnInit(): void {
  }

  submit() {
    // console.log(this.form);
    this.submited.emit(this.form.value);
    this.profileService.add(this.form.value);
  }

  ValidateSeries(control: AbstractControl): {[key: string]: any} | null  {
    const series = ['FFX', 'FFI', 'FFII'];
    if (series.findIndex(s => control.value === s) < 0) {
      return { 'serieInvalid': true };
    }
    return null;
  }
}
