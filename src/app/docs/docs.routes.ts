import { Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction';
import { ColumnConfigComponent } from './core-features/column/configuration/configuration';

export const routes: Routes = [
  {
    path: 'introduction',
    component: IntroductionComponent,
  },
  {
    path: 'column-config',
    component: ColumnConfigComponent,
  },
];
