import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormColorInputComponent } from './form-color-input/form-color-input.component';
import { FormInputNumberComponent } from './form-input-number/form-input-number.component';
import { FormTextInputComponent } from './form-text-input/form-text-input.component';
import { SmartpointIconComponent } from './smartpoint-icon/smartpoint-icon.component';

@NgModule({
  declarations: [
    FormColorInputComponent,
    FormInputNumberComponent,
    FormTextInputComponent,
    SmartpointIconComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormColorInputComponent,
    FormInputNumberComponent,
    FormTextInputComponent,
    SmartpointIconComponent,
  ],
})
export class SharedModule {}
