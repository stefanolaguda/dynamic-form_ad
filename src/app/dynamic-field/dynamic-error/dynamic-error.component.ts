import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-dynamic-error',
  templateUrl: './dynamic-error.component.html',
  styleUrls: ['./dynamic-error.component.scss'],
})
export class DynamicErrorComponent implements OnInit {
  @Input() formName!: FormGroup;
  @Input() fieldName!: string;

  constructor() {}

  ngOnInit(): void {
    console.log('dynamic-error', this.formName);
    console.log(this.fieldName);

    // console.log("formGroupDirective.control", this.formGroupDirective.control);
    
  }
}
