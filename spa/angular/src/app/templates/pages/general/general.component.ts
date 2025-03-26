import { Component, Input, OnInit } from '@angular/core';
import { EditableArea } from '@magnolia/angular-editor';
import { MgnlContent } from '@magnolia/frontend-helpers-base';
import { FooterComponent } from '../../fragments/footer/footer.component';
import { FooterBottomComponent } from '../../fragments/footerBottom/footerBottom.component';
import { NewsletterComponent } from '../../fragments/newsletter/newsletter.component';
import { HomeHeader } from '../../components/headerHome/headerHome.component';
import { FundingComponent } from '../../components/funding/funding.component';

@Component({
  templateUrl: './general.component.html',
  standalone: true,
  imports: [EditableArea, HomeHeader, FooterComponent, FooterBottomComponent, NewsletterComponent, FundingComponent],
})
export class GeneralComponent {
  @Input() main!: MgnlContent;
}
