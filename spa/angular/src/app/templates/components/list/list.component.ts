import { Component, Input } from '@angular/core';
import { EditableArea, EditableComponent } from '@magnolia/angular-editor';
import { MgnlContent } from '@magnolia/frontend-helpers-base';

@Component({
  templateUrl: './list.component.html',
  standalone: true,
  imports: [EditableArea, EditableComponent],
})
export class ListComponent {
  @Input() title!: string;
  @Input() theme!: string;
  @Input() items!: MgnlContent;

  get components() {
    return (
      (this.items?.['@nodes']?.map((nodeName) => {
        return this.items[nodeName];
      }) as MgnlContent[]) || []
    );
  }
}
