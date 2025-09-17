import { Routes } from '@angular/router';
import { ColumnConfigComponent } from '../column/configuration/configuration';
import { ColumnSizingComponent } from '../column/sizing/sizing';
import { ColumnTemplatesComponent } from '../column/templates/templates';
import { ColumnVisibilityComponent } from './visibility/visibility';

export const routes: Routes = [
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
    path: 'column-visibility',
    component: ColumnVisibilityComponent,
  },
];
