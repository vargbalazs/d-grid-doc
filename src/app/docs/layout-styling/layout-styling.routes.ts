import { Routes } from '@angular/router';
import { ThemingComponent } from './theming/theming';
import { CssVariablesComponent } from './variables/variables';

export const routes: Routes = [
  {
    path: 'theming',
    component: ThemingComponent,
  },
  {
    path: 'css-variables',
    component: CssVariablesComponent,
  },
];
