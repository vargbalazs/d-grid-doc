import { Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction';

export const routes: Routes = [
  {
    path: 'introduction',
    component: IntroductionComponent,
  },
  {
    path: '',
    loadChildren: () => import('./core-features/column/column.routes').then((m) => m.routes),
  },
  {
    path: '',
    loadChildren: () => import('./core-features/rows/rows.routes').then((m) => m.routes),
  },
];
