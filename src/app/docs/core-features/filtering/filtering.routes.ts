import { Routes } from '@angular/router';
import { FilteringOverviewComponent } from './overview/overview';
import { FilteringFilterRowComponent } from './row/row';
import { FilteringFilterMenuComponent } from './menu/menu';
import { FilteringFilterExcelComponent } from './excel/excel';

export const routes: Routes = [
  {
    path: 'filtering-overview',
    component: FilteringOverviewComponent,
  },
  {
    path: 'filtering-row',
    component: FilteringFilterRowComponent,
  },
  {
    path: 'filtering-menu',
    component: FilteringFilterMenuComponent,
  },
  {
    path: 'filtering-excel',
    component: FilteringFilterExcelComponent,
  },
];
