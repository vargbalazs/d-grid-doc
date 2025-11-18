import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LiveExampleComponent } from '../../../../components/example/live-example';
import { CodeBlockComponent } from '../../../../components/code-block/code-block';
import { CodeFile } from '../../../../interfaces/code-file';
import { AggregationOverviewExampleComponent } from './example/example';
import { GroupingOverviewComponent } from '../../grouping/overview/overview';

@Component({
  selector: 'docs-adv-features-aggregation-overview',
  imports: [LiveExampleComponent, CodeBlockComponent, AggregationOverviewExampleComponent],
  templateUrl: './overview.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AggregationOverviewComponent {
  aggregates = `
        groupAggregates: DGridGroupAggregate[] = [
            { field: 'id', aggregateFn: 'sum' },
            { field: 'name', aggregateFn: 'count' },
            { field: 'date', aggregateFn: 'max' },
        ];
    `;

  groupable = `

        [groupable]="{showFooter: true, aggregates: groupAggregates, stickyHeader: true, }"
    
    `;

  value = `
    <ng-template
      dGridGroupFooterColumnTemplate
      let-group
      let-column="column"
      let-aggregate="aggregate"
    >
      gr footer column temp: {{column.header}}, sum: {{aggregate.value}}
    </ng-template>
  `;

  codeFiles: CodeFile[] = [
    {
      fileName: 'example.ts',
      code: `
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { D_GRID, DGridGroupAggregate } from 'd-grid-angular';
import { Row } from './row';
import { sampleData } from './data';
import { delay, of } from 'rxjs';

@Component({
  selector: 'docs-adv-features-aggregation-overview-example',
  imports: [D_GRID],
  templateUrl: './example.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AggregationOverviewExampleComponent implements OnInit {
  gridData = signal<Row[]>([]);
  gridDataHttp = of(sampleData).pipe(delay(1000));

  groupAggregates: DGridGroupAggregate[] = [
    { field: 'id', aggregateFn: 'sum' },
    { field: 'name', aggregateFn: 'count' },
    { field: 'date', aggregateFn: 'max' },
  ];

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
<d-grid
  [style.height.%]="87"
  [data]="gridData()"
  [asyncData]="true"
  [groupable]="{
    showFooter: true,
    stickyHeader: true,
    aggregates: groupAggregates,
    groups: [{ field: 'email' }]
  }"
>
  <d-grid-column field="id" header="id" [width]="50" [sortable]="true">
    <ng-template dGridGroupFooterColumnTemplate let-aggregate="aggregate">
      sum: {{ aggregate.value }}
    </ng-template>
  </d-grid-column>
  <d-grid-column field="name" header="name" [width]="100" [sortable]="true">
    <ng-template dGridGroupFooterColumnTemplate let-aggregate="aggregate">
      count: {{ aggregate.value }}
    </ng-template>
  </d-grid-column>
  <d-grid-column field="email" header="email" [width]="150" [sortable]="true"></d-grid-column>
  <d-grid-column field="active" header="active" [width]="100" [sortable]="true"></d-grid-column>
  <d-grid-column field="date" header="date" [width]="100" [sortable]="true">
    <ng-template dGridGroupFooterColumnTemplate let-aggregate="aggregate">
      max: {{ aggregate.value }}
    </ng-template>
  </d-grid-column>
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
            {
              id: 21,
              name: 'Katalin',
              email: 'katalin@example.com',
              active: true,
              date: '2025-06-19',
            },
            {
              id: 22,
              name: 'László',
              email: 'laszlo@example.com',
              active: false,
              date: '2025-06-19',
            },
            {
              id: 23,
              name: 'Mária',
              email: 'maria@example.com',
              active: true,
              date: '2025-06-19',
            },
            {
              id: 24,
              name: 'Nándor',
              email: 'nandor@example.com',
              active: false,
              date: '2025-06-19',
            },
            {
              id: 25,
              name: 'Orsolya',
              email: 'orsolya@example.com',
              active: true,
              date: '2025-06-19',
            },
            {
              id: 26,
              name: 'Péter',
              email: 'peter@example.com',
              active: false,
              date: '2025-06-19',
            },
            {
              id: 27,
              name: 'Rita',
              email: 'rita@example.com',
              active: true,
              date: '2025-06-19',
            },
            {
              id: 28,
              name: 'Szilvia',
              email: 'szilvia@example.com',
              active: false,
              date: '2025-06-19',
            },
            {
              id: 29,
              name: 'Tamás',
              email: 'tamas@example.com',
              active: true,
              date: '2025-06-19',
            },
            {
              id: 30,
              name: 'Zoltán',
              email: 'zoltan@example.com',
              active: false,
              date: '2025-06-19',
            },
            {
              id: 31,
              name: 'Katalin',
              email: 'katalin@example.com',
              active: false,
              date: '2025-06-19',
            },
            {
              id: 32,
              name: 'László',
              email: 'laszlo@example.com',
              active: true,
              date: '2025-06-19',
            },
            {
              id: 33,
              name: 'Mária',
              email: 'maria@example.com',
              active: false,
              date: '2025-06-19',
            },
            {
              id: 34,
              name: 'Nándor',
              email: 'nandor@example.com',
              active: true,
              date: '2025-06-19',
            },
            {
              id: 35,
              name: 'Orsolya',
              email: 'orsolya@example.com',
              active: false,
              date: '2025-06-19',
            },
            {
              id: 36,
              name: 'Péter',
              email: 'peter@example.com',
              active: true,
              date: '2025-06-19',
            },
            {
              id: 37,
              name: 'Rita',
              email: 'rita@example.com',
              active: false,
              date: '2025-06-19',
            },
            {
              id: 38,
              name: 'Szilvia',
              email: 'szilvia@example.com',
              active: true,
              date: '2025-06-19',
            },
            {
              id: 39,
              name: 'Tamás',
              email: 'tamas@example.com',
              active: false,
              date: '2025-06-19',
            },
            {
              id: 40,
              name: 'Zoltán',
              email: 'zoltan@example.com',
              active: true,
              date: '2025-06-19',
            },
            {
              id: 41,
              name: 'Anna',
              email: 'anna@example.com',
              active: true,
              date: '2025-06-19',
            },
            {
              id: 42,
              name: 'Bence',
              email: 'bence@example.com',
              active: false,
              date: '2025-06-19',
            },
            {
              id: 43,
              name: 'Csilla',
              email: 'csilla@example.com',
              active: true,
              date: '2025-06-19',
            },
            {
              id: 44,
              name: 'Dániel',
              email: 'daniel@example.com',
              active: false,
              date: '2025-06-19',
            },
            {
              id: 45,
              name: 'Erika',
              email: 'erika@example.com',
              active: true,
              date: '2025-06-19',
            },
            {
              id: 46,
              name: 'Ferenc',
              email: 'ferenc@example.com',
              active: false,
              date: '2025-06-19',
            },
            {
              id: 47,
              name: 'Gábor',
              email: 'gabor@example.com',
              active: true,
              date: '2025-06-19',
            },
            {
              id: 48,
              name: 'Hanna',
              email: 'hanna@example.com',
              active: false,
              date: '2025-06-19',
            },
            {
              id: 49,
              name: 'István',
              email: 'istvan@example.com',
              active: true,
              date: '2025-06-19',
            },
            {
              id: 50,
              name: 'Judit',
              email: 'judit@example.com',
              active: false,
              date: '2024-06-19',
            },
          ];
          
          `,
      lang: 'typescript',
      showLineNumbers: true,
    },
  ];
}
