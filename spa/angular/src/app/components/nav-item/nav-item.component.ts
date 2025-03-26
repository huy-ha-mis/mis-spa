import { Component, Input } from '@angular/core';
import { MgnlContent } from '@magnolia/frontend-helpers-base';
import { environment } from '../../../environments/environment';
import { NavLinkComponent } from '../nav-link/nav-link.component';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [NavLinkComponent],
  templateUrl: './nav-item.component.html',
})
export class NavItemComponent {
  @Input() content?: MgnlContent;
  @Input() nodeName!: string;
  @Input() currentLanguage!: string;
  @Input() isMagnoliaEdit = false;

  get path() {
    const baseName =
      this.currentLanguage === environment.languages[0]
        ? ''
        : '/' + this.currentLanguage;
    return (
      baseName + this.content?.['@path'].replace(this.nodeName || '', '') || '/'
    );
  }

  get subItems() {
    return (
      this.content?.['@nodes']?.map((nodeName) => {
        return this.content?.[nodeName] as MgnlContent;
      }) || []
    );
  }
}
