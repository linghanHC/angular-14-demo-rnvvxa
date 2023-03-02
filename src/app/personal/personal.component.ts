import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class PersonalComponent implements OnInit {
  // This is the inferred type of the form
  form!: FormGroup<{
    firstName: FormControl<string | null>;
    lastName: FormControl<string | null>;
    gender: FormControl<string | null>;
    language: FormControl<string | null>;
  }>;
  genderOptions: string[] = [
    'Female',
    'Male',
    'Non-binary',
    'Gender non-conforming',
    'Prefer not to say',
  ];
  languageOptions: string[] = ['en', 'fr'];
  isSubmitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      language: ['', Validators.required],
    });
  }

    // Access formcontrols getter
    // To validate Angular select dropdown; we require to use Validators class with Reactive Forms. Therefore, we imported the Validators. module it will validate the required value of select options using getter method to access select options’s form control value.
    get cityName() {
      return this.form.get('language');
    }

  changeLanguage(e: any) {
    console.log("changeLanguage ~" , JSON.stringify(e));
    console.log("changeLanguage ~" , this.cityName?.value);
    this.cityName?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  onSubmit(): void {
    this.isSubmitted = true;
    console.log(this.form);
    console.log(JSON.stringify(this.form.value));
  }
}
