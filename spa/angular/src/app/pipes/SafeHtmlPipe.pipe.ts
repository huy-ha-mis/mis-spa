import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml',
  standalone: true,
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}
  transform(value: string) {
    if (!value) {
      return value;
    }
    return this.domSanitizer.bypassSecurityTrustHtml(value);
  }
}
