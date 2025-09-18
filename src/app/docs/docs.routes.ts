import { Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction';
import { ChangelogComponent } from './changelog/changelog';

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
];
