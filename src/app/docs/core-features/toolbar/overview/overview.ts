import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LiveExampleComponent } from '../../../../components/example/live-example';
import { CodeFile } from '../../../../interfaces/code-file';
import { ToolbarOverviewExampleComponent } from './example/example';

@Component({
  selector: 'docs-core-features-toolbar-overview',
  imports: [LiveExampleComponent, ToolbarOverviewExampleComponent],
  templateUrl: './overview.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarOverviewComponent {
  codeFiles: CodeFile[] = [
    {
      fileName: 'example.ts',
      code: `
          import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
          import { D_GRID } from 'd-grid-angular';
          import { Row } from './row';
          import { sampleData } from './data';
          import { delay, of } from 'rxjs';

          @Component({
            selector: 'docs-core-features-toolbar-overview-example',
            imports: [D_GRID],
            templateUrl: './example.html',
            changeDetection: ChangeDetectionStrategy.OnPush,
          })
          export class ToolbarOverviewExampleComponent implements OnInit {
            gridData = signal<Row[]>([]);
            gridDataHttp = of(sampleData).pipe(delay(1000));

            ngOnInit(): void {
              this.gridDataHttp.subscribe((data) => {
                this.gridData.set([...data]);
              });
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
            <d-grid [style.height.%]="87" [data]="gridData()" [asyncData]="true" [showToolbar]="true">
              <ng-template dGridToolbarTemplate>
                <button>some button</button>
                <d-grid-spacer [width]="'50px'"></d-grid-spacer>
                <button>some button 2</button>
                <d-grid-spacer></d-grid-spacer>
                <button>some button 3</button>
              </ng-template>
              <d-grid-column field="id" header="id" [width]="50" [sortable]="true"></d-grid-column>
              <d-grid-column field="name" header="name" [width]="100" [sortable]="true"></d-grid-column>
              <d-grid-column field="email" header="email" [width]="150" [sortable]="true"></d-grid-column>
              <d-grid-column field="active" header="active" [width]="100" [sortable]="true"></d-grid-column>
              <d-grid-column field="date" header="date" [width]="100" [sortable]="true"></d-grid-column>
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
            date: string;
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
            {
              id: 1,
              name: 'Anna',
              email: 'anna@example.com',
              active: true,
              date: '2025-09-25',
            },
            {
              id: 2,
              name: 'Bence',
              email: 'bence@example.com',
              active: false,
              date: '2025-06-18',
            },
            {
              id: 3,
              name: 'Csilla',
              email: 'csilla@example.com',
              active: true,
              date: '2025-06-19',
            },
            {
              id: 4,
              name: 'Dániel',
              email: 'daniel@example.com',
              active: false,
              date: '2025-07-19',
            },
            {
              id: 5,
              name: 'Erika',
              email: 'erika@example.com',
              active: true,
              date: '2025-09-19',
            },
            {
              id: 6,
              name: 'Ferenc',
              email: 'ferenc@example.com',
              active: false,
              date: '2025-12-19',
            },
            {
              id: 7,
              name: 'Gábor',
              email: 'gabor@example.com',
              active: true,
              date: '2025-06-19',
            },
            {
              id: 8,
              name: 'Hanna',
              email: 'hanna@example.com',
              active: false,
              date: '2025-06-19',
            },
            {
              id: 9,
              name: 'István',
              email: 'istvan@example.com',
              active: true,
              date: '2025-06-19',
            },
            {
              id: 10,
              name: 'Judit',
              email: 'judit@example.com',
              active: false,
              date: '2025-06-19',
            },
            {
              id: 11,
              name: 'Anna',
              email: 'anna@example.com',
              active: false,
              date: '2025-06-19',
            },
            {
              id: 12,
              name: 'Bence',
              email: 'bence@example.com',
              active: true,
              date: '2025-06-19',
            },
            {
              id: 13,
              name: 'Csilla',
              email: 'csilla@example.com',
              active: false,
              date: '2025-06-19',
            },
            {
              id: 14,
              name: 'Dániel',
              email: 'daniel@example.com',
              active: true,
              date: '2025-06-19',
            },
            {
              id: 15,
              name: 'Erika',
              email: 'erika@example.com',
              active: false,
              date: '2025-06-19',
            },
            {
              id: 16,
              name: 'Ferenc',
              email: 'ferenc@example.com',
              active: true,
              date: '2025-06-19',
            },
            {
              id: 17,
              name: 'Gábor',
              email: 'gabor@example.com',
              active: false,
              date: '2025-06-19',
            },
            {
              id: 18,
              name: 'Hanna',
              email: 'hanna@example.com',
              active: true,
              date: '2025-06-19',
            },
            {
              id: 19,
              name: 'István',
              email: 'istvan@example.com',
              active: false,
              date: '2025-06-19',
            },
            {
              id: 20,
              name: 'Judit',
              email: 'judit@example.com',
              active: true,
              date: '2025-06-19',
            },          
          `,
      lang: 'typescript',
      showLineNumbers: true,
    },
  ];
}
