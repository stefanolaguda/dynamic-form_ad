import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicRadioComponent } from './dynamic-radio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DynamicRadioComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [DynamicRadioComponent],
})
export class DynamicRadioModule {}
