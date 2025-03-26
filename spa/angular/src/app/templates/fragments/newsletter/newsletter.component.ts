import { Component, Input } from '@angular/core';
import { EditableComponent } from '@magnolia/angular-editor';
import { MgnlContent } from '@magnolia/frontend-helpers-base';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  standalone: true,
  imports: [EditableComponent],
})
export class NewsletterComponent {
  @Input() components!: MgnlContent[];
}
