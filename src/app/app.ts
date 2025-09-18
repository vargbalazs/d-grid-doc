import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MainLayoutComponent } from './layout/main/main';

@Component({
  selector: 'app-root',
  imports: [MainLayoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('d-grid-doc');
}
