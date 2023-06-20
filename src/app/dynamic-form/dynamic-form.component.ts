import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  ValidationErrors,
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

  constructor(){}

  ngOnInit(): void {
    console.log(this.modelData);
    this.buildForm();
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
      // console.log('fieldProps', fieldProps); qui mi passo l'oggetto di ogni campo
      // console.log('field', field); qui invece vedo le chiavi di ognuno degli oggetti

      const validators: ValidationErrors | null = this.addValidator(
        fieldProps.rules
      );
      formGroupFields[field] = new FormControl(fieldProps.value, validators);
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
}
