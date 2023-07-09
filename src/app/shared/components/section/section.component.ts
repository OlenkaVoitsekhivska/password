import { Component, Input } from '@angular/core';
import { Section } from '../../models/section.model';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent {
  @Input() section!: Section;
}
