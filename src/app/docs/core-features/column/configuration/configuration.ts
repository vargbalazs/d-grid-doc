import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeBlockComponent } from '../../../../components/code-block/code-block';
import { ColumnConfigWithInputComponent } from './example-col-with-input/example-col-with-input';
import { LiveExampleComponent } from '../../../../components/example/live-example';
import { CodeFile } from '../../../../interfaces/code-file';
import { ColumnConfigWithElementsComponent } from './example-col-with-elements/example-col-with-elements';

@Component({
  selector: 'docs-core-features-column-config',
  imports: [
    CodeBlockComponent,
    ColumnConfigWithInputComponent,
    LiveExampleComponent,
    ColumnConfigWithElementsComponent,
  ],
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

  codeFilesWithInput: CodeFile[] = [
    {
      fileName: 'example.ts',
      code: `
        import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
        import { D_GRID, DGridColumn } from 'd-grid-angular';
        import { Row } from '../row';
        import { sampleData } from '../data';

        @Component({
          selector: 'docs-core-features-column-config-with-input',
          imports: [D_GRID],
          templateUrl: './example-col-with-input.html',
          changeDetection: ChangeDetectionStrategy.OnPush,
        })
        export class ColumnConfigWithInputComponent {
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
        }
      `,
      lang: 'typescript',
      showLineNumbers: true,
      selected: true,
    },
    {
      fileName: 'example.html',
      code: `

        <d-grid [style.height.%]="99" [data]="gridData()" [columns]="columns()"> </d-grid>

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
        { id: 1, name: 'Hinze', email: 'hchamberlaine0@foxnews.com', active: false },
        { id: 2, name: 'Cayla', email: 'csmyley1@people.com.cn', active: true },
        { id: 3, name: 'Haslett', email: 'hbaldery2@myspace.com', active: true },
        { id: 4, name: 'Yvonne', email: 'ypaggitt3@xrea.com', active: true },
        { id: 5, name: 'Diana', email: 'dlusher4@weather.com', active: true },
        { id: 6, name: 'Leesa', email: 'lgilbank5@tinyurl.com', active: true },
        { id: 7, name: 'Pattie', email: 'pwoodhall6@zdnet.com', active: true },
        { id: 8, name: 'Wye', email: 'wkupker7@wisc.edu', active: false },
        { id: 9, name: 'Selia', email: 'sheathcote8@oaic.gov.au', active: false },
        { id: 10, name: 'Lolly', email: 'lpagram9@behance.net', active: true },
        { id: 11, name: 'Elmer', email: 'esudlowa@vk.com', active: false },
        {
          id: 12,
          name: 'Rozalie',
          email: 'rmclarenb@chronoengine.com',
          active: true,
        },
        { id: 13, name: 'Amory', email: 'adurnallc@dion.ne.jp', active: false },
        { id: 14, name: 'Willow', email: 'wbonnickd@yolasite.com', active: false },
        { id: 15, name: 'Jone', email: 'jdurnforde@istockphoto.com', active: true },
        { id: 16, name: 'Ethelyn', email: 'eferrelif@google.es', active: true },
        { id: 17, name: 'Errick', email: 'ebrandsg@statcounter.com', active: true },
        { id: 18, name: 'Diego', email: 'dlotteh@newyorker.com', active: false },
        { id: 19, name: 'Becky', email: 'blisamorei@sbwire.com', active: false },
        { id: 20, name: 'Lind', email: 'lcluelowj@stumbleupon.com', active: true },
      ];
      `,
      lang: 'typescript',
      showLineNumbers: true,
    },
  ];

  codeFilesWithElements: CodeFile[] = [
    {
      fileName: 'example.ts',
      code: `
        import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
        import { D_GRID } from 'd-grid-angular';
        import { Row } from '../row';
        import { sampleData } from '../data';

        @Component({
          selector: 'docs-core-features-column-config-with-elements',
          imports: [D_GRID],
          templateUrl: './example-col-with-elements.html',
          changeDetection: ChangeDetectionStrategy.OnPush,
        })
        export class ColumnConfigWithElementsComponent {
          gridData = signal<Row[]>(sampleData);
        }
      `,
      lang: 'typescript',
      showLineNumbers: true,
      selected: true,
    },
    {
      fileName: 'example.html',
      code: `
        <d-grid [data]="gridData()">
          <d-grid-column field="id" header="id" [width]="50" [sortable]="true"></d-grid-column>
          <d-grid-column field="name" header="name" [width]="100" [sortable]="true"></d-grid-column>
          <d-grid-column field="email" header="email" [width]="150" [sortable]="true"></d-grid-column>
          <d-grid-column field="active" header="active" [width]="100" [sortable]="true"></d-grid-column>
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
        { id: 1, name: 'Hinze', email: 'hchamberlaine0@foxnews.com', active: false },
        { id: 2, name: 'Cayla', email: 'csmyley1@people.com.cn', active: true },
        { id: 3, name: 'Haslett', email: 'hbaldery2@myspace.com', active: true },
        { id: 4, name: 'Yvonne', email: 'ypaggitt3@xrea.com', active: true },
        { id: 5, name: 'Diana', email: 'dlusher4@weather.com', active: true },
        { id: 6, name: 'Leesa', email: 'lgilbank5@tinyurl.com', active: true },
        { id: 7, name: 'Pattie', email: 'pwoodhall6@zdnet.com', active: true },
        { id: 8, name: 'Wye', email: 'wkupker7@wisc.edu', active: false },
        { id: 9, name: 'Selia', email: 'sheathcote8@oaic.gov.au', active: false },
        { id: 10, name: 'Lolly', email: 'lpagram9@behance.net', active: true },
        { id: 11, name: 'Elmer', email: 'esudlowa@vk.com', active: false },
        {
          id: 12,
          name: 'Rozalie',
          email: 'rmclarenb@chronoengine.com',
          active: true,
        },
        { id: 13, name: 'Amory', email: 'adurnallc@dion.ne.jp', active: false },
        { id: 14, name: 'Willow', email: 'wbonnickd@yolasite.com', active: false },
        { id: 15, name: 'Jone', email: 'jdurnforde@istockphoto.com', active: true },
        { id: 16, name: 'Ethelyn', email: 'eferrelif@google.es', active: true },
        { id: 17, name: 'Errick', email: 'ebrandsg@statcounter.com', active: true },
        { id: 18, name: 'Diego', email: 'dlotteh@newyorker.com', active: false },
        { id: 19, name: 'Becky', email: 'blisamorei@sbwire.com', active: false },
        { id: 20, name: 'Lind', email: 'lcluelowj@stumbleupon.com', active: true },
      ];
      `,
      lang: 'typescript',
      showLineNumbers: true,
    },
  ];
}
