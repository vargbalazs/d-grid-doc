import { Routes } from '@angular/router';
import { RowDataComponent } from './data/data';
import { RowTemplatesComponent } from './templates/templates';

export const routes: Routes = [
  {
    path: 'row-data',
    component: RowDataComponent,
  },
  {
    path: 'row-templates',
    component: RowTemplatesComponent,
  },
];
