import { Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction';
import { ColumnConfigComponent } from './core-features/column/configuration/configuration';
import { ColumnSizingComponent } from './core-features/column/sizing/sizing';
import { ColumnTemplatesComponent } from './core-features/column/templates/templates';
import { RowDataComponent } from './core-features/rows/data/data';
import { RowTemplatesComponent } from './core-features/rows/templates/templates';

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
  {
    path: 'column-templates',
    component: ColumnTemplatesComponent,
  },
  {
    path: 'row-data',
    component: RowDataComponent,
  },
  {
    path: 'row-templates',
    component: RowTemplatesComponent,
  },
];
