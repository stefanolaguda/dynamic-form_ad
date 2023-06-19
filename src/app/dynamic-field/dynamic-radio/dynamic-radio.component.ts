import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-radio',
  templateUrl: './dynamic-radio.component.html',
  styleUrls: ['./dynamic-radio.component.scss'],
})
export class DynamicRadioComponent implements OnInit {
  @Input() formName!: FormGroup;
  @Input() field: any;

  constructor() {}
  ngOnInit(): void {}
}
