import { Component } from '@angular/core';
import { KENDO_DRAWER } from '@progress/kendo-angular-layout';
import { SideMenuComponent } from '../side-menu/side-menu';

@Component({
  selector: 'nav-bar',
  imports: [KENDO_DRAWER, SideMenuComponent],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBarComponent {}
