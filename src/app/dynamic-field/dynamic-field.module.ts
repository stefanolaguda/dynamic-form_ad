import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFieldComponent } from './dynamic-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicCheckboxModule } from './dynamic-checkbox/dynamic-checkbox.module';
import { DynamicInputModule } from './dynamic-input/dynamic-input.module';
import { DynamicRadioModule } from './dynamic-radio/dynamic-radio.module';
import { DynamicSelectModule } from './dynamic-select/dynamic-select.module';
import { DynamicInputComponent } from './dynamic-input/dynamic-input.component';
import { DynamicCheckboxComponent } from './dynamic-checkbox/dynamic-checkbox.component';
import { DynamicRadioComponent } from './dynamic-radio/dynamic-radio.component';

@NgModule({
  declarations: [DynamicFieldComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicCheckboxModule, DynamicInputModule, DynamicRadioModule, DynamicSelectModule],
  exports: [DynamicFieldComponent],
})
export class DynamicFieldModule {}
