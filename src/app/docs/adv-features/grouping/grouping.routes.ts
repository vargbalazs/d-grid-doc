import { Routes } from '@angular/router';
import { GroupingOverviewComponent } from './overview/overview';
import { GroupingTemplatesComponent } from './templates/templates';

export const routes: Routes = [
  {
    path: 'grouping-overview',
    component: GroupingOverviewComponent,
  },
  {
    path: 'grouping-templates',
    component: GroupingTemplatesComponent,
  },
];
