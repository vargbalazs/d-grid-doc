import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeBlockComponent } from '../../../../components/code-block/code-block';

@Component({
  selector: 'docs-core-features-column-sorting',
  imports: [CodeBlockComponent],
  templateUrl: './sorting.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnSortingComponent {
  sortModeInt = `
        export interface DGridSortSettings {
          sortMode?: DGridSortMode;
        }
    `;

  sortSettings = `

    <d-grid [sortSettings]="{sortMode: 'multiple'}"></d-grid>

  `;

  colSettings = `
    export interface DGridColumnSortSettings {
      compareFn?: (a: any, b: any) => number;
      sortValueFn?: (rowData: any) => any;
      initialDir?: DGridSortOrder;
      sortPriority?: number;
    }
  `;

  customCompare = `
    customCompare = (a: Row, b: Row): number => {
      return a.id >= 40 ? -1 : 1;
    };
  `;

  customCompareTemplate = `

  <d-grid-column field="email" header="email" [width]="150" [sortable]="{compareFn: customCompare}"></d-grid-column>
  
  `;

  sortValueFn = `
    getId = (rowData: any) => {
      return (rowData as Row).id;
    };
  `;

  sortValueTemplate = `

    <d-grid-column field="email" header="email" [width]="150" [sortable]="{sortValueFn: getId}"></d-grid-column>
  
  `;

  initialSort = `

    <d-grid-column field="email" header="email" [width]="150" [sortable]="{initialDir: 'desc'}"></d-grid-column>

  `;

  sortPrior = `

    <d-grid-column field="active" header="active" [width]="100" [sortable]="{initialDir: 'desc', sortPriority: 1}"></d-grid-column>
  
  `;
}
