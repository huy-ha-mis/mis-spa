
// @Component({
//   selector: 'app-our-futured-services',
//   templateUrl: './our-futured-services.component.html',
//   styleUrls: ['./our-futured-services.component.css']
// })
// export class OurFuturedServicesComponent { }


import { Component, Input, OnInit } from '@angular/core';
import { EditableComponent } from '@magnolia/angular-editor';
import { MgnlContent } from '@magnolia/frontend-helpers-base';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from '../../../pipes/SafeHtmlPipe.pipe';

@Component({
  selector: 'app-feature-cards',
  templateUrl: './featureCards.component.html',
  standalone: true,
  imports: [EditableComponent, CommonModule, SafeHtmlPipe],

})
export class FeatureCardsComponent implements OnInit {
  @Input() components!: MgnlContent[];
  @Input() items!: { [key: string]: any };

  ngOnInit(): void {
    if (this.items && this.items['@nodes']) {
      (this.items['@nodes'] as string[])?.map((nodeName: string) => {
        return this.items[nodeName] as MgnlContent;
      });
    }
  }
}
