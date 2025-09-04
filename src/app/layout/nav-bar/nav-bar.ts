import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KENDO_DRAWER } from '@progress/kendo-angular-layout';
import { SideMenuComponent } from '../side-menu/side-menu';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'nav-bar',
  imports: [KENDO_DRAWER, SideMenuComponent, RouterOutlet],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {}
