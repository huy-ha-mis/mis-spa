import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { EditablePage, MagnoliaConfig } from '@magnolia/angular-editor';
import { EditableArea } from '@magnolia/angular-editor'; 
import {
  EditorContextService,
  IMagnoliaContext,
  MgnlContent,
  MgnlTemplateAnnotations,
} from '@magnolia/frontend-helpers-base';
import { environment } from '../environments/environment';
import { config } from '../magnolia.config';
// import { NavigationComponent } from './components/navigation/navigation.component';
import {
  fetchPageContent,
  fetchTemplateAnnotations,
} from './services/magnolia.service';

@Component({
  templateUrl: './root.component.html',
  standalone: true,
  imports: [EditablePage, EditableArea],
})
export class RootComponent {
  @Input() header!: MgnlContent;
  content?: MgnlContent;
  templateAnnotations?: MgnlTemplateAnnotations;
  magnoliaContext?: IMagnoliaContext;
  magnoliaConfig: MagnoliaConfig;
  nodeName: string;

  constructor(private router: Router) {
    this.magnoliaConfig = config;
    this.nodeName = environment.appBase;

    // refresh the content on navigation event
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.loadPageContent();
      }
    });
  }

  async loadPageContent() {
    this.magnoliaContext = EditorContextService.getMagnoliaContext(
      window.location.href,
      this.nodeName,
      environment.languages
    );
    const content = await fetchPageContent(
      this.magnoliaContext,
      environment.pageBase
    );
    const templateAnnotations = await fetchTemplateAnnotations(
      this.magnoliaContext,
      environment.templateAnnotationsBase
    );

    if (templateAnnotations) {
      this.templateAnnotations = templateAnnotations;
    }

    this.content = content;
  }

  get containerStyle() {
    return this.magnoliaContext?.isMagnoliaEdit
      ? 'disable-a-pointer-events flex-grow'
      : 'flex-grow';
  }
}
