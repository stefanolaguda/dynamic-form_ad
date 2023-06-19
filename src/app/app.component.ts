import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  registerForm!: FormGroup;
  fields: string[] = [];
  model = {
    name: '',
    lastName: '',
    address: '',
    age: '',
  };

  constructor() {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    const formGroupFields: Record<string, FormControl> =
      this.getFormControlsFields();
    this.registerForm = new FormGroup(formGroupFields);
  }

  getFormControlsFields() {
    const formGroupFields: Record<string, FormControl> = {};

    for (const field of Object.keys(this.model)) {
      formGroupFields[field] = new FormControl('');
      this.fields.push(field);
    }

    console.log(formGroupFields);

    return formGroupFields;
  }
}
