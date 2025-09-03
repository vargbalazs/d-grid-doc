import { Component } from '@angular/core';
import { AppBarComponent } from '../app-bar/app-bar';
import { NavBarComponent } from '../nav-bar/nav-bar';

@Component({
  selector: 'main-layout',
  imports: [AppBarComponent, NavBarComponent],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class MainLayoutComponent {}
