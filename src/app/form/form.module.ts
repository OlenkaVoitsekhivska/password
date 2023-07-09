import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, CoreModule],
  exports: [FormComponent],
})
export class FormModule {}
