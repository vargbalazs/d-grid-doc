import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { ICON_SETTINGS, IconSettingsService } from '@progress/kendo-angular-icons';
import { provideAnimations } from '@angular/platform-browser/animations';
import { IconService } from './services/icons';
import { provideHighlightOptions } from 'ngx-highlightjs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withViewTransitions()),
    { provide: ICON_SETTINGS, useValue: { type: 'font' } },
    { provide: IconSettingsService, useClass: IconService },
    provideAnimations(),
    provideHighlightOptions({
      fullLibraryLoader: () => import('highlight.js'),
      lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
    }),
  ],
};
