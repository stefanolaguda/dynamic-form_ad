import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFieldModule } from '../dynamic-field/dynamic-field.module';

@NgModule({
  declarations: [DynamicFormComponent],
  imports: [CommonModule, DynamicFieldModule],
  exports: [DynamicFormComponent],
})
export class DynamicFormModule {}
