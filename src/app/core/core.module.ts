import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidateStrengthDirective } from './directives/validate-strength.directive';

@NgModule({
  declarations: [ValidateStrengthDirective],
  imports: [CommonModule],
  exports: [ValidateStrengthDirective],
})
export class CoreModule {}
