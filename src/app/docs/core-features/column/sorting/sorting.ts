import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeBlockComponent } from '../../../../components/code-block/code-block';
import { LiveExampleComponent } from '../../../../components/example/live-example';
import { ColumnSortExampleComponent } from './example/example';
import { CodeFile } from '../../../../interfaces/code-file';

@Component({
  selector: 'docs-core-features-column-sorting',
  imports: [CodeBlockComponent, LiveExampleComponent, ColumnSortExampleComponent],
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

  codeFiles: CodeFile[] = [
    {
      fileName: 'example.ts',
      code: `
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
            return id <= 10 ? \`below or equal 10 (\${id})\` : \`greather 10 (\${id})\`;
          }
        }
      `,
      lang: 'typescript',
      showLineNumbers: true,
      selected: true,
    },
    {
      fileName: 'example.html',
      code: `
        <d-grid [style.height.%]="99" [data]="gridData()" [sortSettings]="{ sortMode: 'multiple' }">
          <d-grid-column field="id" header="id" [width]="50" [sortable]="{ sortValueFn: getId }">
            <ng-template dGridCellTemplate let-data>
              <div>{{ transformCellValue(data.id) }}</div>
            </ng-template>
          </d-grid-column>
          <d-grid-column
            field="name"
            header="name"
            [width]="100"
            [sortable]="{ initialDir: 'desc', sortPriority: 2 }"
          ></d-grid-column>
          <d-grid-column field="email" header="email" [width]="150" [sortable]="true"></d-grid-column>
          <d-grid-column
            field="active"
            header="active"
            [width]="100"
            [sortable]="{ initialDir: 'asc', sortPriority: 1 }"
          ></d-grid-column>
        </d-grid>
      `,
      lang: 'html',
      showLineNumbers: true,
    },
    {
      fileName: 'row.ts',
      code: `
      export interface Row {
        id: number;
        name: string;
        email: string;
        active: boolean;
      }
      `,
      lang: 'typescript',
      showLineNumbers: true,
    },
    {
      fileName: 'data.ts',
      code: `
      import { Row } from './row';
      
      export const sampleData: Row[] = [
        { id: 1, name: 'Alice', email: 'alice@example.com', active: true },
        { id: 2, name: 'Bob', email: 'bob@example.com', active: false },
        { id: 3, name: 'Charlie', email: 'charlie@example.com', active: true },
        { id: 4, name: 'Diana', email: 'diana@example.com', active: false },
        { id: 5, name: 'Eve', email: 'eve@example.com', active: true },
        { id: 6, name: 'Frank', email: 'frank@example.com', active: false },
        { id: 7, name: 'Grace', email: 'grace@example.com', active: true },
        { id: 8, name: 'Heidi', email: 'heidi@example.com', active: false },
        { id: 9, name: 'Ivan', email: 'ivan@example.com', active: true },
        { id: 10, name: 'Judy', email: 'judy@example.com', active: false },
        { id: 11, name: 'Alice', email: 'alice.z@example.com', active: false },
        { id: 12, name: 'Bob', email: 'bob.y@example.com', active: true },
        { id: 13, name: 'Charlie', email: 'charlie.x@example.com', active: false },
        { id: 14, name: 'Diana', email: 'diana.w@example.com', active: true },
        { id: 15, name: 'Eve', email: 'eve.v@example.com', active: false },
        { id: 16, name: 'Frank', email: 'frank.u@example.com', active: true },
        { id: 17, name: 'Grace', email: 'grace.t@example.com', active: false },
        { id: 18, name: 'Heidi', email: 'heidi.s@example.com', active: true },
        { id: 19, name: 'Ivan', email: 'ivan.r@example.com', active: false },
        { id: 20, name: 'Judy', email: 'judy.q@example.com', active: true },
      ];
      `,
      lang: 'typescript',
      showLineNumbers: true,
    },
  ];
}
