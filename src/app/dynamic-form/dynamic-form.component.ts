import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  dynamicFormGroup!: FormGroup;
  fields: string[] = [];
  @Input() modelData!: {}; 

  ngOnInit(): void {
    console.log(this.modelData);
    this.buildForm();
  }

  buildForm() {
    const formGroupFields: Record<string, FormControl> =
      this.getFormControlsFields();

    this.dynamicFormGroup = new FormGroup(formGroupFields);
  }

  getFormControlsFields() {
    const formGroupFields: Record<string, FormControl> = {};

    for (const field of Object.keys(this.modelData)) {
      formGroupFields[field] = new FormControl('');
      this.fields.push(field);
    }

    return formGroupFields;
  }
}
