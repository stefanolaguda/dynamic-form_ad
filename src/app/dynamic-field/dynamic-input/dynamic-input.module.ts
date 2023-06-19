import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicInputComponent } from './dynamic-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DynamicInputComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [DynamicInputComponent],
})
export class DynamicInputModule {}
