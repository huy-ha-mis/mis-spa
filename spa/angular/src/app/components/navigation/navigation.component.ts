import { Component, Input, OnInit } from '@angular/core';
import { MgnlContent } from '@magnolia/frontend-helpers-base';
import { environment } from '../../../environments/environment';
import { fetchPageNav } from '../../services/magnolia.service';
import { NavItemComponent } from '../nav-item/nav-item.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  standalone: true,
  imports: [NavItemComponent],
})
export class NavigationComponent implements OnInit {
  navContent?: MgnlContent;
  @Input() nodeName!: string;
  @Input() currentLanguage!: string;
  @Input() isMagnoliaEdit = false;

  ngOnInit(): void {
    fetchPageNav(this.nodeName, environment.navBase).then(
      (data: MgnlContent) => {
        this.navContent = data;
      }
    );
  }
}
