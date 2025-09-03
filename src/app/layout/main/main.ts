import { Component } from '@angular/core';
import { AppBarComponent } from '../app-bar/app-bar';

@Component({
  selector: 'main-layout',
  imports: [AppBarComponent],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class MainLayoutComponent {}
