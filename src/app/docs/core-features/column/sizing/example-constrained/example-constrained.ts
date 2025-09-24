import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { D_GRID } from 'd-grid-angular';
import { Row } from './row';
import { sampleData } from './data';

@Component({
  selector: 'docs-core-features-column-sizing-resize-constrained-example',
  imports: [D_GRID],
  templateUrl: './example-constrained.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnResizeConstrainedExampleComponent {
  gridData = signal<Row[]>(sampleData);
}
