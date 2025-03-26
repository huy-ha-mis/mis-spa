import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection, Injectable } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withHashLocation,
} from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { authInterceptor } from './http-interceptor';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { EnvServiceProvider } from './env.service.provider';

@Injectable({
  providedIn: 'root',
})

export class CustomHashLocationStrategy extends HashLocationStrategy {
  override pushState(
      state: any,
      title: string,
      path: string,
      queryParams: string
  ): void {
    console.log(`${state} ${title} ${path} ${queryParams}`);
  }

  override replaceState(
      state: any,
      title: string,
      path: string,
      queryParams: string
  ): void {
    console.log(`${state} ${title} ${path} ${queryParams}`);
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding(), withHashLocation()),
    { provide: LocationStrategy, useClass: CustomHashLocationStrategy },
    provideAnimationsAsync(),
    importProvidersFrom(HttpClientModule),
    provideHttpClient(withInterceptors([authInterceptor])),
    EnvServiceProvider,
  ],
};
