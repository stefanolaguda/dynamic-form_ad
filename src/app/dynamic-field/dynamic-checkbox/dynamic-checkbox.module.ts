import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicCheckboxComponent } from './dynamic-checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DynamicCheckboxComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [DynamicCheckboxComponent],
})
export class DynamicCheckboxModule {}
