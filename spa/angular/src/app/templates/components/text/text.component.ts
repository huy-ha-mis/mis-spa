import { Component, Input } from '@angular/core';
import { SafeHtmlPipe } from '../../../pipes/SafeHtmlPipe.pipe';

@Component({
  templateUrl: './text.component.html',
  standalone: true,
  imports: [SafeHtmlPipe],
})
export class TextComponent {
  @Input() text!: string;
}
