import { Component, Input, OnInit } from '@angular/core';
import { MgnlContent } from '@magnolia/frontend-helpers-base';  // Assuming this is the correct import
import { EditableComponent } from '@magnolia/angular-editor';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  standalone: true,
  imports: [EditableComponent, CommonModule],
})
export class NavigationComponent implements OnInit {
  @Input() nodeName!: string;
  @Input() currentLanguage!: string;
  @Input() isMagnoliaEdit = false;
  @Input() items!: { [key: string]: any };

  ngOnInit(): void {
    // Check if 'items' and '@nodes' are defined before accessing them
    if (this.items && this.items['@nodes']) {
      // Safe mapping of items['@nodes'] if it exists
      (this.items['@nodes'] as string[])?.map((nodeName: string) => {
        return this.items[nodeName] as MgnlContent;
      });
    }
  }
}
