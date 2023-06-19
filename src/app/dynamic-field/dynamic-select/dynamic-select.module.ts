import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicSelectComponent } from './dynamic-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DynamicSelectComponent],
  imports: [CommonModule,ReactiveFormsModule, FormsModule],
  exports: [DynamicSelectComponent],
})
export class DynamicSelectModule {}
