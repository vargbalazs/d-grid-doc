import { Routes } from '@angular/router';
import { ThemingComponent } from './theming/theming';
import { CssVariablesComponent } from './variables/variables';
import { GridLayoutComponent } from './grid-layout/grid-layout';

export const routes: Routes = [
  {
    path: 'theming',
    component: ThemingComponent,
  },
  {
    path: 'css-variables',
    component: CssVariablesComponent,
  },
  {
    path: 'grid-layout',
    component: GridLayoutComponent,
  },
];
