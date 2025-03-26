import { NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-link',
  standalone: true,
  imports: [RouterLink, NgTemplateOutlet],
  templateUrl: './nav-link.component.html',
})
export class NavLinkComponent {
  @Input() path = '';
  @Input() className = '';
  @Input() isMagnoliaEdit = false;
}
