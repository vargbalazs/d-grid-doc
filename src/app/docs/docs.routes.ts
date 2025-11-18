import { Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction';
import { ChangelogComponent } from './changelog/changelog';
import { QuickStartComponent } from './quick-start/quick-start';

export const routes: Routes = [
  {
    path: 'introduction',
    component: IntroductionComponent,
  },
  {
    path: 'changelog',
    component: ChangelogComponent,
  },
  {
    path: 'quick-start',
    component: QuickStartComponent,
  },
  {
    path: '',
    loadChildren: () => import('./core-features/column/column.routes').then((m) => m.routes),
  },
  {
    path: '',
    loadChildren: () => import('./core-features/rows/rows.routes').then((m) => m.routes),
  },
  {
    path: '',
    loadChildren: () => import('./layout-styling/layout-styling.routes').then((m) => m.routes),
  },
  {
    path: '',
    loadChildren: () => import('./core-features/filtering/filtering.routes').then((m) => m.routes),
  },
  {
    path: '',
    loadChildren: () => import('./core-features/paging/paging.routes').then((m) => m.routes),
  },
  {
    path: '',
    loadChildren: () => import('./adv-features/grouping/grouping.routes').then((m) => m.routes),
  },
  {
    path: '',
    loadChildren: () =>
      import('./adv-features/aggregation/aggregation.routes').then((m) => m.routes),
  },
];
