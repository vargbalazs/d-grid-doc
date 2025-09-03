import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLayoutComponent } from './layout/main/main';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainLayoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('d-grid-doc');
}
