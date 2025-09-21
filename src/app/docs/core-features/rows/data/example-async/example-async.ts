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
