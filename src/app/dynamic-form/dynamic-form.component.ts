import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  dynamicFormGroup!: FormGroup;
  fields: string[] | Record<string, any> = [];
  @Input() modelData!: Record<string, any>;

  constructor() {}

  ngOnInit(): void {
    // console.log(this.modelData);
    this.buildForm();

    this.dynamicFormGroup.controls['firstname'].valueChanges.subscribe(
      (event) => {
        console.log(event);
      }
    );
  }

  buildForm() {
    const formGroupFields: Record<string, FormControl> =
      this.getFormControlsFields();

    this.dynamicFormGroup = new FormGroup(formGroupFields);

    // this.formGroupDirective.addFormGroup = this.dynamicFormGroup;

    console.log('dynamicFormGroup', this.dynamicFormGroup);
  }

  getFormControlsFields() {
    const formGroupFields: Record<string, FormControl> = {};

    for (const field of Object.keys(this.modelData)) {
      const fieldProps = this.modelData[field];

      const validators: ValidatorFn[] = ([] as ValidatorFn[]).concat(
        ...this.addValidator(fieldProps.rules)
      );

      console.log('validators', validators);

      formGroupFields[field] = new FormControl(fieldProps.value, {
        validators: validators?.length > 0 ? validators : null,
        updateOn: fieldProps.triggerOn || 'change',
      });
      this.fields.push({ ...fieldProps, fieldName: field });
    }

    console.log('formGroupFields del dynamic-form', formGroupFields);
    console.log(
      'fields, risultato finale del getFormControlFields',
      this.fields
    );

    return formGroupFields;
  }

  addValidator(rules: { required: boolean }) {
    if (!rules) {
      return [];
    }

    const validators = Object.keys(rules).map((rule) => {
      switch (rule) {
        case 'required':
          return Validators.required;
        default:
          return []; // se non c'è il validator inserito, allora mi ritorna indietro un array vuoto
      }
    });
    return validators;
  }

  onSubmit() {
    console.log(this.dynamicFormGroup.value);
  }
}
