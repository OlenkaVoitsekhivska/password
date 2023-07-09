import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { SectionComponent } from './components/section/section.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [InputComponent, SectionComponent, CardComponent],
  imports: [CommonModule, FormsModule, CoreModule],
  exports: [InputComponent, SectionComponent, CardComponent],
})
export class SharedModule {}
