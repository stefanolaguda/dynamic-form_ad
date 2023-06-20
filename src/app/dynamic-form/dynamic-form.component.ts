import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
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
      // console.log('fieldProps', fieldProps); qui mi passo l'oggetto di ogni campo
      // console.log('field', field); qui invece vedo le chiavi di ognuno degli oggetti

      // const validators: ValidatorFn[] = this.addValidator(
      //   fieldProps.rules
      // );

      const validators: ValidatorFn[] = ([] as ValidatorFn[]).concat(
        ...this.addValidator(fieldProps.rules)
      );

      console.log('validators', validators);

      // const validators2: (
      //   | never[]
      //   | ((control: AbstractControl<any, any>) => ValidationErrors | null)
      // )[] = this.addValidator(fieldProps.rules);
      // console.log('validators 2', validators2);

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
}
