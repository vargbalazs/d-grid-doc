import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeBlockComponent } from '../../../../components/code-block/code-block';
import { LiveExampleComponent } from '../../../../components/example/live-example';
import { RowDataStaticExampleComponent } from './example-static/example-static';
import { CodeFile } from '../../../../interfaces/code-file';
import { RowDataAsyncExampleComponent } from './example-async/example-async';
import { RowDataAsyncConvertExampleComponent } from './example-convert/example-convert';

@Component({
  selector: 'docs-core-features-rows-data',
  imports: [
    CodeBlockComponent,
    LiveExampleComponent,
    RowDataStaticExampleComponent,
    RowDataAsyncExampleComponent,
    RowDataAsyncConvertExampleComponent,
  ],
  templateUrl: './data.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowDataComponent {
  interf = `
    export interface Row {
      id: number;
      name: string;
      email: string;
      active: boolean;
    }
    `;

  static = `

    gridData = signal<Row[]>(sampleData);

  `;

  staticAssign = `
    <d-grid [data]="gridData()">
      <d-grid-column field="id" header="id" [width]="50"></d-grid-column>
      <d-grid-column field="name" header="name" [width]="100"></d-grid-column>
      <d-grid-column field="email" header="email" [width]="150"></d-grid-column>
      <d-grid-column field="active" header="active" [width]="100"></d-grid-column>
    </d-grid>
  `;

  refreshAssign = `
  
    this.gridData.set(sampleData);

  `;

  subscribe = `
    gridDataHttp = of(sampleData).pipe(delay(1000));

    ngOnInit(): void {
      this.gridDataHttp.subscribe((data) => {
        this.gridData.set([...data]);
      });
    }
  `;

  asyncAssign = `
    // first set the signal to anything in order to trigger change detection and also to show loading indicator
    this.gridData.set([]);
    this.gridDataHttp.subscribe((newData) => {
      this.gridData.set([...newData]);
    });
  `;

  asyncAssignV2 = `
    this.loading = true;
    this.gridDataHttp.subscribe((data) => {
      this.gridData.set([...data]);
      this.loading = false;
    });
  `;

  convertToSignal = `
    gridDataSignal = toSignal<Row[], Row[]>(this.gridDataHttp, {
      initialValue: [],
    });
  `;

  rowInt = `
    export interface DGridRow {
      internalId: string;
      originalIndex: number;
      data: any;
    }
  `;

  codeFilesStatic: CodeFile[] = [
    {
      fileName: 'example.ts',
      code: `
        import { ChangeDetectionStrategy, Component, signal, ViewChild } from '@angular/core';
        import { D_GRID, DGridComponent } from 'd-grid-angular';
        import { Row } from './row';
        import { sampleData } from './data';
        import { sampleData2 } from './data-2';

        @Component({
          selector: 'docs-core-features-rows-data-static-example',
          imports: [D_GRID],
          templateUrl: './example-static.html',
          changeDetection: ChangeDetectionStrategy.OnPush,
        })
        export class RowDataStaticExampleComponent {
          gridData = signal<Row[]>(sampleData);
          newData = sampleData2;

          @ViewChild('grid') dGrid!: DGridComponent;

          changeData() {
            if (this.dGrid.data()?.length === 20) this.gridData.set(this.newData);
            if (this.dGrid.data()?.length === 10) this.gridData.set(sampleData);
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
        <button style="margin: 5px" (click)="changeData()">Change grid data</button>
        <d-grid [style.height.%]="87" [data]="gridData()" #grid>
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
    {
      fileName: 'data-2.ts',
      code: `
      import { Row } from './row';
      
      export const sampleData2: Row[] = [
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
      ];
      `,
      lang: 'typescript',
      showLineNumbers: true,
    },
  ];

  codeFilesAsync: CodeFile[] = [
    {
      fileName: 'example.ts',
      code: `
        import { ChangeDetectionStrategy, Component, OnInit, signal, ViewChild } from '@angular/core';
        import { D_GRID } from 'd-grid-angular';
        import { Row } from './row';
        import { sampleData } from './data';
        import { sampleData2 } from './data-2';
        import { delay, of } from 'rxjs';

        @Component({
          selector: 'docs-core-features-rows-data-async-example',
          imports: [D_GRID],
          templateUrl: './example-async.html',
          changeDetection: ChangeDetectionStrategy.OnPush,
        })
        export class RowDataAsyncExampleComponent implements OnInit {
          gridData = signal<Row[]>([]);
          gridDataHttp = of(sampleData).pipe(delay(1000));
          gridDataHttp2 = of(sampleData2).pipe(delay(1000));
          loading = false;

          ngOnInit(): void {
            this.gridDataHttp.subscribe((data) => {
              this.gridData.set([...data]);
            });
          }

          changeData() {
            // loading indicator shows up automatically
            this.gridData.set([]);
            this.gridDataHttp2.subscribe((newData) => {
              this.gridData.set([...newData]);
            });
          }

          changeData2() {
            // loading indicator explicitly triggered
            this.loading = true;
            this.gridDataHttp.subscribe((data) => {
              this.gridData.set([...data]);
              this.loading = false;
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
        <div>
          <button style="margin: 5px" (click)="changeData()">Change grid data</button>
          <button style="margin: 5px" (click)="changeData2()">Change grid data (loading ind exp)</button>
        </div>
        <d-grid [style.height.%]="87" [data]="gridData()" [asyncData]="true" [loading]="loading">
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
    {
      fileName: 'data-2.ts',
      code: `
      import { Row } from './row';
      
      export const sampleData2: Row[] = [
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
      ];
      `,
      lang: 'typescript',
      showLineNumbers: true,
    },
  ];

  codeFilesAsyncConvert: CodeFile[] = [
    {
      fileName: 'example.ts',
      code: `
        import {
          ChangeDetectionStrategy,
          Component,
          EnvironmentInjector,
          inject,
          runInInjectionContext,
        } from '@angular/core';
        import { D_GRID } from 'd-grid-angular';
        import { Row } from './row';
        import { sampleData } from './data';
        import { delay, of } from 'rxjs';
        import { toSignal } from '@angular/core/rxjs-interop';
        import { sampleData2 } from './data-2';

        @Component({
          selector: 'docs-core-features-rows-data-async-convert-example',
          imports: [D_GRID],
          templateUrl: './example-convert.html',
          changeDetection: ChangeDetectionStrategy.OnPush,
        })
        export class RowDataAsyncConvertExampleComponent {
          private injector = inject(EnvironmentInjector);
          gridDataHttp = of(sampleData).pipe(delay(1000));
          gridDataSignal = toSignal<Row[], Row[]>(this.gridDataHttp, {
            initialValue: [],
          });

          changeData() {
            const newData = [...sampleData2];
            const newObservable = of(newData).pipe(delay(1000));
            runInInjectionContext(this.injector, () => {
              this.gridDataSignal = toSignal(newObservable, {
                initialValue: [],
              });
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
        <button style="margin: 5px" (click)="changeData()">Change grid data</button>
        <d-grid [style.height.%]="87" [data]="gridDataSignal()" [asyncData]="true">
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
    {
      fileName: 'data-2.ts',
      code: `
      import { Row } from './row';
      
      export const sampleData2: Row[] = [
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
      ];
      `,
      lang: 'typescript',
      showLineNumbers: true,
    },
  ];
}
