import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { D_GRID } from 'd-grid-angular';
import { Row } from './row';
import { sampleData } from './data';

@Component({
  selector: 'docs-core-features-column-sorting-example',
  imports: [D_GRID],
  templateUrl: './example.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnSortExampleComponent {
  gridData = signal<Row[]>(sampleData);

  getId = (rowData: any) => {
    return (rowData as Row).id;
  };

  transformCellValue(id: number): string {
    return id <= 10 ? `below or equal 10 (${id})` : `greather 10 (${id})`;
  }
}
