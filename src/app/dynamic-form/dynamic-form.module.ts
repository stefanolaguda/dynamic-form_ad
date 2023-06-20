import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFieldModule } from '../dynamic-field/dynamic-field.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DynamicFormComponent],
  imports: [CommonModule, DynamicFieldModule, ReactiveFormsModule, FormsModule],
  exports: [DynamicFormComponent],
})
export class DynamicFormModule {}
