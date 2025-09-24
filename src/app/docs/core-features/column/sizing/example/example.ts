import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { D_GRID } from 'd-grid-angular';
import { Row } from './row';
import { sampleData } from './data';

@Component({
  selector: 'docs-core-features-column-sizing-resize-example',
  imports: [D_GRID],
  templateUrl: './example.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnResizeExampleComponent {
  gridData = signal<Row[]>(sampleData);
}
