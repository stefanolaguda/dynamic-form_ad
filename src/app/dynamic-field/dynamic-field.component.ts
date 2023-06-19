import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.scss'],
})
export class DynamicFieldComponent implements OnInit {
  @Input() field!: string | number | null;
  @Input() formName!: FormGroup<any>;

  constructor() {}

  ngOnInit(): void {}
}
