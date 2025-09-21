import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { D_GRID } from 'd-grid-angular';
import { Row } from '../row';
import { sampleData } from '../data';

@Component({
  selector: 'docs-core-features-column-config-with-elements',
  imports: [D_GRID],
  templateUrl: './example-col-with-elements.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnConfigWithElementsComponent {
  gridData = signal<Row[]>(sampleData);
}
