import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicInputComponent } from './dynamic-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicErrorModule } from '../dynamic-error/dynamic-error.module';

@NgModule({
  declarations: [DynamicInputComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DynamicErrorModule],
  exports: [DynamicInputComponent],
})
export class DynamicInputModule {}
