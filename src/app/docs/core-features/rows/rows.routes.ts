import { Routes } from '@angular/router';
import { RowDataComponent } from './data/data';
import { RowTemplatesComponent } from './templates/templates';
import { RowStickyComponent } from './sticky/sticky';

export const routes: Routes = [
  {
    path: 'row-data',
    component: RowDataComponent,
  },
  {
    path: 'row-templates',
    component: RowTemplatesComponent,
  },
  {
    path: 'row-sticky',
    component: RowStickyComponent,
  },
];
