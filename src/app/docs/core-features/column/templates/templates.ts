import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeBlockComponent } from '../../../../components/code-block/code-block';

@Component({
  selector: 'docs-core-features-column-templates',
  imports: [CodeBlockComponent],
  templateUrl: './templates.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnTemplatesComponent {
  headerTemplate = `
    <d-grid-column field="id" header="id" [width]="50" [sortable]="true">
      <ng-template dGridHeaderTemplate let-column>
        <div>{{ column.header }}</div>
      </ng-template>
    </d-grid-column>
    `;

  cellTemplate = `
    <d-grid-column field="id" header="id" [width]="50" [sortable]="true">
      <ng-template dGridCellTemplate let-data let-column="column">
        <div>{{ data.id}} {{column.field}}</div>
      </ng-template>
    </d-grid-column>
  `;

  footerTemplate = `
    <d-grid-column field="id" header="id" [width]="50" [sortable]="true">
      <ng-template dGridFooterTemplate let-column>
        <div>{{ column.header}}</div>
      </ng-template>
    </d-grid-column>
  `;
}
