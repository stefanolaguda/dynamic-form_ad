import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-error',
  templateUrl: './dynamic-error.component.html',
  styleUrls: ['./dynamic-error.component.scss'],
})
export class DynamicErrorComponent implements OnInit {
  @Input() formName!: FormGroup;
  @Input() fieldName!: string;

  constructor() {}
  ngOnInit(): void {}
}
