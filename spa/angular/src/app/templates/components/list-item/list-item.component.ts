import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './list-item.component.html',
  standalone: true,
})
export class ListItemComponent {
  @Input() label!: string;
  @Input() url!: string;
}
