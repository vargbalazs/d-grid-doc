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
