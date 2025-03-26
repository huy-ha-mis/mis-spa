import { Component, Input } from '@angular/core';
import { ImageComponent } from '../../fragments/image/image.component';

@Component({
  templateUrl: './image.component.html',
  imports: [ImageComponent],
  standalone: true,
})
export class ImgComponent {
  @Input() image!: Record<string, unknown>;
}
