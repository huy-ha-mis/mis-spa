import { Component, Input, OnInit } from '@angular/core';
import { EditableArea } from '@magnolia/angular-editor';
import { MgnlContent } from '@magnolia/frontend-helpers-base';
import { FooterComponent } from '../../fragments/footer/footer.component';
import { NewsletterComponent } from '../../fragments/newsletter/newsletter.component';
import { FooterBottomComponent } from '../../fragments/footerBottom/footerBottom.component';
import { FeatureCardsComponent } from '../../components/featureCards/featureCards.component';
import { SectionTitleComponent } from '../../components/sectionTitle/sectionTitle.component';
import { HomeHeader } from '../../components/headerHome/headerHome.component';
import { FundingComponent } from '../../components/funding/funding.component';

@Component({
  templateUrl: './basic.component.html',
  standalone: true,
  imports: [EditableArea, FooterComponent, NewsletterComponent, FooterBottomComponent, FeatureCardsComponent, SectionTitleComponent, HomeHeader, FundingComponent],
})
export class BasicComponent {
  @Input() header!: MgnlContent;
  @Input() main!: MgnlContent;
  @Input() footer!: MgnlContent;
}
