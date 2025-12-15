import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LiveExampleComponent } from '../../../../components/example/live-example';
import { NavigationOverviewExampleComponent } from './example/example';
import { CodeFile } from '../../../../interfaces/code-file';

@Component({
  selector: 'docs-core-features-navigation-overview',
  imports: [LiveExampleComponent, NavigationOverviewExampleComponent],
  templateUrl: './overview.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationOverviewComponent {
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
  selector: 'docs-core-features-navigation-overview-example',
  imports: [D_GRID],
  templateUrl: './example.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationOverviewExampleComponent implements OnInit {
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
<d-grid
  [style.height.%]="87"
  [data]="gridData()"
  [asyncData]="true"
  filterable="excel"
  [navigable]="true"
>
  <d-grid-column field="id" header="id" [width]="50" [sortable]="true"> </d-grid-column>
  <d-grid-column field="name" header="name" [width]="100" [sortable]="true"></d-grid-column>
  <d-grid-column field="email" header="email" [width]="150" [sortable]="true"> </d-grid-column>
  <d-grid-column field="active" header="active" [width]="100" [sortable]="true"> </d-grid-column>
  <d-grid-column field="date" header="date" [width]="100" [sortable]="true"> </d-grid-column>
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
          name: 'Hinze',
          email: 'hchamberlaine0@foxnews.com',
          active: false,
          date: '2025-09-14',
        },
        {
          id: 2,
          name: 'Cayla',
          email: 'csmyley1@people.com.cn',
          active: true,
          date: '2025-06-18',
        },
        {
          id: 3,
          name: 'Haslett',
          email: 'hbaldery2@myspace.com',
          active: true,
          date: '2025-05-14',
        },
        {
          id: 4,
          name: 'Yvonne',
          email: 'ypaggitt3@xrea.com',
          active: true,
          date: '2024-11-07',
        },
        {
          id: 5,
          name: 'Diana',
          email: 'dlusher4@weather.com',
          active: true,
          date: '2024-12-07',
        },
        {
          id: 6,
          name: 'Leesa',
          email: 'lgilbank5@tinyurl.com',
          active: true,
          date: '2025-06-25',
        },
        {
          id: 7,
          name: 'Pattie',
          email: 'pwoodhall6@zdnet.com',
          active: true,
          date: '2024-12-26',
        },
        {
          id: 8,
          name: 'Wye',
          email: 'wkupker7@wisc.edu',
          active: false,
          date: '2025-03-09',
        },
        {
          id: 9,
          name: 'Selia',
          email: 'sheathcote8@oaic.gov.au',
          active: false,
          date: '2025-03-25',
        },
        {
          id: 10,
          name: 'Lolly',
          email: 'lpagram9@behance.net',
          active: true,
          date: '2025-03-02',
        },
        {
          id: 11,
          name: 'Elmer',
          email: 'esudlowa@vk.com',
          active: false,
          date: '2025-02-17',
        },
        {
          id: 12,
          name: 'Rozalie',
          email: 'rmclarenb@chronoengine.com',
          active: true,
          date: '2025-01-29',
        },
        {
          id: 13,
          name: 'Amory',
          email: 'adurnallc@dion.ne.jp',
          active: false,
          date: '2024-10-14',
        },
        {
          id: 14,
          name: 'Willow',
          email: 'wbonnickd@yolasite.com',
          active: false,
          date: '2025-02-26',
        },
        {
          id: 15,
          name: 'Jone',
          email: 'jdurnforde@istockphoto.com',
          active: true,
          date: '2024-12-14',
        },
        {
          id: 16,
          name: 'Ethelyn',
          email: 'eferrelif@google.es',
          active: true,
          date: '2025-05-21',
        },
        {
          id: 17,
          name: 'Errick',
          email: 'ebrandsg@statcounter.com',
          active: true,
          date: '2025-09-23',
        },
        {
          id: 18,
          name: 'Diego',
          email: 'dlotteh@newyorker.com',
          active: false,
          date: '2025-04-20',
        },
        {
          id: 19,
          name: 'Becky',
          email: 'blisamorei@sbwire.com',
          active: false,
          date: '2025-07-25',
        },
        {
          id: 20,
          name: 'Lind',
          email: 'lcluelowj@stumbleupon.com',
          active: true,
          date: '2025-01-31',
        },
      ];
        `,
      lang: 'typescript',
      showLineNumbers: true,
    },
  ];
}
