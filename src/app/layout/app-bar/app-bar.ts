import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KENDO_BUTTON } from '@progress/kendo-angular-buttons';
import { KENDO_APPBAR } from '@progress/kendo-angular-navigation';

@Component({
  selector: 'app-bar',
  imports: [KENDO_APPBAR, KENDO_BUTTON],
  templateUrl: './app-bar.html',
  styleUrl: './app-bar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppBarComponent {}
