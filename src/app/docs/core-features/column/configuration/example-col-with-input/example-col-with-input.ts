import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { D_GRID, DGridColumn } from 'd-grid-angular';
import { Row } from '../row';
import { sampleData } from '../data';

@Component({
  selector: 'docs-core-features-column-config-with-input',
  imports: [D_GRID],
  templateUrl: './example-col-with-input.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnConfigWithInputComponent {
  gridData = signal<Row[]>(sampleData);
  columns = signal<DGridColumn[]>([
    {
      header: 'column 1',
      field: 'id',
      sortable: true,
    },
    {
      header: 'column 2',
      field: 'name',
      sortable: true,
    },
    {
      header: 'column 3',
      field: 'email',
      sortable: true,
    },
    {
      header: 'column 4',
      field: 'active',
      sortable: true,
    },
  ]);
}
