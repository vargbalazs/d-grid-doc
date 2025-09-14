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
}
