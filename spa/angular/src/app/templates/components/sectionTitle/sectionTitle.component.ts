import { Component, Input } from '@angular/core';
import { EditableComponent } from '@magnolia/angular-editor';
import { MgnlContent } from '@magnolia/frontend-helpers-base';
import { SafeHtmlPipe } from '../../../pipes/SafeHtmlPipe.pipe';

@Component({
  selector: 'app-section-title',
  templateUrl: './sectionTitle.component.html',
  standalone: true,
  imports: [EditableComponent, SafeHtmlPipe],
})
export class SectionTitleComponent {
  @Input() components!: MgnlContent[];
  @Input() text!: string;
}
