import { Component, Input } from '@angular/core';
import { SafeHtmlPipe } from '../../../pipes/SafeHtmlPipe.pipe';

@Component({
  templateUrl: './headline.component.html',
  standalone: true,
  imports: [SafeHtmlPipe],
})
export class HeadlineComponent {
  @Input() text!: string;
}
