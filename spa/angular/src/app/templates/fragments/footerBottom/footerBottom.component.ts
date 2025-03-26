import { Component, Input } from '@angular/core';
import { EditableComponent } from '@magnolia/angular-editor';
import { MgnlContent } from '@magnolia/frontend-helpers-base';

@Component({
  selector: 'app-footer-bottom',
  templateUrl: './footerBottom.component.html',
  standalone: true,
  imports: [EditableComponent],
})
export class FooterBottomComponent {
  @Input() components!: MgnlContent[];
}
