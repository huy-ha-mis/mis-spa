import { Component, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  standalone: true,
})
export class ImageComponent {
  @Input() caption!: string;
  @Input() image!: Record<string, unknown>;
  @Input() altText!: string;

  get damURL() {
    return environment.damRawBase + this.image?.['@link'];
  }
}
