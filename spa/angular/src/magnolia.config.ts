import { MagnoliaConfig } from '@magnolia/angular-editor';
import { ListItemComponent } from './app/templates/components/list-item/list-item.component';
import { ListComponent } from './app/templates/components/list/list.component';
import { TextImageComponent } from './app/templates/components/text-image/text-image.component';
import { TextComponent } from './app/templates/components/text/text.component';
import { HeadlineComponent } from './app/templates/components/headline/headline.component';
import { TopLineComponent } from './app/templates/components/top-line/top-line.component';
import { NavigationComponent } from './app/templates/components/navigation/navigation.component';

import { BasicComponent } from './app/templates/pages/basic/basic.component';
import { GeneralComponent } from './app/templates/pages/general/general.component';
import { SectionTitleComponent } from './app/templates/components/sectionTitle/sectionTitle.component';
import { FeatureCardsComponent } from './app/templates/components/featureCards/featureCards.component';
import { FundingComponent } from './app/templates/components/funding/funding.component';
import { ImgComponent } from './app/templates/components/image/image.component';

export const config: MagnoliaConfig = {
  componentMappings: {
    'uob-lm:pages/basicAngular': BasicComponent,
    'uob-lm:pages/generalAngular': GeneralComponent,

    'uob-lm:components/text': TextComponent,
    'uob-lm:components/list': ListComponent,
    'uob-lm:components/listItem': ListItemComponent,
    'uob-lm:components/textImage': TextImageComponent,
    'uob-lm:components/headline': HeadlineComponent,
    'uob-lm:components/topLine': TopLineComponent,
    'uob-lm:components/navigation': NavigationComponent,
    'uob-lm:components/sectionTitle': SectionTitleComponent,
    'uob-lm:components/featureCard': FeatureCardsComponent,
    'uob-lm:components/funding': FundingComponent,
    'uob-lm:components/image': ImgComponent,
  },
};
