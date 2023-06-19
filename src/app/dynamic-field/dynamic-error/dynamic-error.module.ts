import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicErrorComponent } from './dynamic-error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DynamicErrorComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [DynamicErrorComponent],
})
export class DynamicErrorModule {}
