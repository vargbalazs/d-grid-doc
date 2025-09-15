import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeBlockComponent } from '../../../../components/code-block/code-block';

@Component({
  selector: 'docs-core-features-column-config',
  imports: [CodeBlockComponent],
  templateUrl: './configuration.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnConfigComponent {
  columnDef = `
  columns = signal<DGridColumn[]>([
    {
      header: 'column 1',
      field: 'id',
    },
    {
      header: 'column 2',
      field: 'name',
    },
    {
      header: 'column 3',
      field: 'email',
    },
    {
      header: 'column 4',
      field: 'active',
    },
  ]);
    `;

  columnDefInTemplate = `
  <d-grid>
    <d-grid-column field="id" header="id" [width]="50"></d-grid-column>
    <d-grid-column field="name" header="name" [width]="100"></d-grid-column>
    <d-grid-column field="email" header="email" [width]="150"></d-grid-column>
    <d-grid-column field="active" header="active" [width]="100"></d-grid-column>
  </d-grid>
  `;
  for = `
    @for (column of columns(); track column.field) {
      <d-grid-column
        [field]="column.field"
        [header]="column.header">
      </d-grid-column>
    }
  `;
}
