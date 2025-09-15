import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeBlockComponent } from '../../../../components/code-block/code-block';

@Component({
  selector: 'docs-core-features-rows-data',
  imports: [CodeBlockComponent],
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
    gridDataHttp = of(sampleData).pipe(delay(3000));

    ngOnInit(): void {
      this.gridDataHttp.subscribe((data) => {
        this.gridData.set([...sampleData]);
      });
    }
  `;

  asyncAssign = `
    // first set the signal to anything in order to trigger change detection and also to show loading indicator
    this.gridData.set([]);
    this.gridDataHttp.subscribe((data) => {
      this.gridData.set([...newSampleData]);
    });
  `;

  asyncAssignV2 = `
    this.loading = true;
    this.gridDataHttp.subscribe((data) => {
      this.gridData.set([...sampleDataMulti]);
      this.loading = false;
    });
  `;
}
