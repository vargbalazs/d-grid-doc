import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { D_GRID, DGridIconService } from 'd-grid-angular';
import { Row } from './row';
import { sampleData } from './data';

@Component({
  selector: 'docs-layout-styling-icons-example',
  imports: [D_GRID],
  templateUrl: './example.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconsExampleComponent implements OnInit {
  gridData = signal<Row[]>(sampleData);
  iconService = inject(DGridIconService);

  ngOnInit(): void {
    this.iconService.registerFontClass('sort-asc', 'fi fi-rs-marker');
  }
}
