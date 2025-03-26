import { Component, Input } from '@angular/core';
import { SafeHtmlPipe } from '../../../pipes/SafeHtmlPipe.pipe';
import { ImageComponent } from '../../fragments/image/image.component';

@Component({
  templateUrl: './text-image.component.html',
  imports: [SafeHtmlPipe, ImageComponent],
  standalone: true,
})
export class TextImageComponent {
  @Input() caption!: string;
  @Input() image!: Record<string, unknown>;
  @Input() altText!: string;
  @Input() text!: string;
}
