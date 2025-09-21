import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeBlockComponent } from '../../../../components/code-block/code-block';
import { LiveExampleComponent } from '../../../../components/example/live-example';
import { RowTemplatesExampleComponent } from './example/example';
import { CodeFile } from '../../../../interfaces/code-file';

@Component({
  selector: 'docs-core-features-rows-templates',
  imports: [CodeBlockComponent, LiveExampleComponent, RowTemplatesExampleComponent],
  templateUrl: './templates.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowTemplatesComponent {
  loadingTempl = `
    <d-grid [data]="gridData()" [asyncData]="true">
      <d-grid-column field="id" header="id" [width]="50"> </d-grid-column>
      <d-grid-column field="id" header="id2" [width]="50"></d-grid-column>
      <d-grid-column field="name" header="name" [width]="100"></d-grid-column>
      <d-grid-column field="email" header="email" [width]="150"> </d-grid-column>
      <d-grid-column field="active" header="active" [width]="100"> </d-grid-column>
      <ng-template dGridLoadingTemplate>
        <div>custom loading template</div>
      </ng-template>
    </d-grid>
    `;

  noDataTempl = `
    <d-grid [data]="gridData()" [asyncData]="true">
      <d-grid-column field="id" header="id" [width]="50"> </d-grid-column>
      <d-grid-column field="id" header="id2" [width]="50"></d-grid-column>
      <d-grid-column field="name" header="name" [width]="100"></d-grid-column>
      <d-grid-column field="email" header="email" [width]="150"> </d-grid-column>
      <d-grid-column field="active" header="active" [width]="100"> </d-grid-column>
      <ng-template dGridNoDataTemplate>
        <div>custom no-data template</div>
      </ng-template>
    </d-grid>
  `;

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
          selector: 'docs-core-features-rows-templates-example',
          imports: [D_GRID],
          templateUrl: './example.html',
          changeDetection: ChangeDetectionStrategy.OnPush,
        })
        export class RowTemplatesExampleComponent implements OnInit {
          gridData = signal<Row[]>([]);
          gridDataHttp = of(sampleData).pipe(delay(1000));
          showDefaultLoadTemplate = signal<boolean>(false);
          showDefaultNoDataTemplate = false;

          ngOnInit(): void {
            this.gridDataHttp.subscribe((data) => {
              this.gridData.set([...data]);
            });
          }

          emptyData() {
            // loading indicator shows up automatically
            this.gridData.set([]);
            this.gridDataHttp.subscribe((newData) => {
              this.gridData.set([]);
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
        <button style="margin: 5px" (click)="emptyData()">Empty data</button>
        <d-grid [style.height.%]="87" [data]="gridData()" [asyncData]="true">
          <d-grid-column field="id" header="id" [width]="50"> </d-grid-column>
          <d-grid-column field="id" header="id2" [width]="50"></d-grid-column>
          <d-grid-column field="name" header="name" [width]="100"></d-grid-column>
          <d-grid-column field="email" header="email" [width]="150"> </d-grid-column>
          <d-grid-column field="active" header="active" [width]="100"> </d-grid-column>
          <ng-template dGridLoadingTemplate>
            <div style="align-self: center; justify-self: center">custom loading template</div>
          </ng-template>
          <ng-template dGridNoDataTemplate>
            <div style="align-self: center; justify-self: center">custom no-data template</div>
          </ng-template>
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
