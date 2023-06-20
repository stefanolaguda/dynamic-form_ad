import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicInputComponent } from './dynamic-input/dynamic-input.component';
import { DynamicSelectComponent } from './dynamic-select/dynamic-select.component';
import { DynamicRadioComponent } from './dynamic-radio/dynamic-radio.component';
import { DynamicCheckboxComponent } from './dynamic-checkbox/dynamic-checkbox.component';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.scss'],
})
export class DynamicFieldComponent implements OnInit, AfterViewInit {
  @Input() fields!: any;
  @Input() formName!: FormGroup<any>;

  @ViewChild('dynamicInputContainer', { read: ViewContainerRef })
  dynamicInputContainer!: ViewContainerRef;

  supportedDynamicComponents = [
    {
      name: 'text',
      component: DynamicInputComponent,
    },
    {
      name: 'number',
      component: DynamicInputComponent,
    },
    {
      name: 'email',
      component: DynamicInputComponent,
    },
    {
      name: 'date',
      component: DynamicInputComponent,
    },
    {
      name: 'select',
      component: DynamicSelectComponent,
    },
    {
      name: 'radio',
      component: DynamicRadioComponent,
    },
    {
      name: 'checkbox',
      component: DynamicCheckboxComponent,
    },
  ];

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log('dynamic field, fields:', this.fields);
  }

  getComponentByType(type: string) {
    const componentDynamic = this.supportedDynamicComponents.find(
      (c) => c.name === type
    );

    return componentDynamic?.component || DynamicInputComponent;
  }

  registerDynamicField() {
    for (const field of Object.keys(this.fields)) {
      const element = this.fields[field];
      console.log(element);

      const componentType = this.getComponentByType(element.type);
      console.log(componentType);

      const dynamicComponent =
        this.dynamicInputContainer.createComponent(componentType);
      dynamicComponent.setInput('field', element);
      dynamicComponent.setInput('formName', this.formName);
      this.cd.detectChanges();
    }
  }

  ngAfterViewInit(): void {
    this.registerDynamicField();
  }
}
