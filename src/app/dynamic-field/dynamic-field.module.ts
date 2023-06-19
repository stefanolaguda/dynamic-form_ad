import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFieldComponent } from './dynamic-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DynamicFieldComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [DynamicFieldComponent],
})
export class DynamicFieldModule {}
