import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-checkbox',
  templateUrl: './dynamic-checkbox.component.html',
  styleUrls: ['./dynamic-checkbox.component.scss'],
})
export class DynamicCheckboxComponent implements OnInit {
  @Input() field: any;
  @Input() formName!: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
