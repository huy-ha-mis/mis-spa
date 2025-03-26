import { Component, Input } from '@angular/core';
import { MgnlContent } from '@magnolia/frontend-helpers-base';

@Component({
  selector: 'app-top-line',
  templateUrl: './top-line.component.html',
  standalone: true,
})
export class TopLineComponent {
  @Input() components!: MgnlContent[];
}
