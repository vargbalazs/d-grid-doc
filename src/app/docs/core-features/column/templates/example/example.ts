import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { D_GRID } from 'd-grid-angular';
import { Row } from '../row';
import { sampleData } from '../data';

@Component({
  selector: 'docs-core-features-column-templates-example',
  imports: [D_GRID],
  templateUrl: './example.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnTemplatesExampleComponent {
  gridData = signal<Row[]>(sampleData);
}
