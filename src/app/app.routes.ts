import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'docs',
    loadChildren: () => import('./docs/docs.routes').then((m) => m.routes),
  },
];
