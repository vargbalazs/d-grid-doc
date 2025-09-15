import { Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction';
import { ColumnConfigComponent } from './core-features/column/configuration/configuration';
import { ColumnSizingComponent } from './core-features/column/sizing/sizing';

export const routes: Routes = [
  {
    path: 'introduction',
    component: IntroductionComponent,
  },
  {
    path: 'column-config',
    component: ColumnConfigComponent,
  },
  {
    path: 'column-sizing',
    component: ColumnSizingComponent,
  },
];
