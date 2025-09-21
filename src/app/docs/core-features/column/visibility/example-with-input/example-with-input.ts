import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { D_GRID, DGridColumn } from 'd-grid-angular';
import { Row } from '../row';
import { sampleData } from '../data';

@Component({
  selector: 'docs-core-features-column-visibility-example',
  imports: [D_GRID],
  templateUrl: './example-with-input.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnVisWithInputComponent {
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

  toggle() {
    const updated = this.columns().map((col) =>
      col.field === 'email' ? { ...col, hidden: !col.hidden } : col
    );
    this.columns.set(updated);
  }
}
