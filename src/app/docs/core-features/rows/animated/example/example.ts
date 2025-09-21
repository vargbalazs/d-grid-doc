import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { D_GRID, DGridRow } from 'd-grid-angular';
import { Row } from './row';
import { sampleData } from './data';
import { delay, of } from 'rxjs';

@Component({
  selector: 'docs-core-features-rows-animated-example',
  imports: [D_GRID],
  templateUrl: './example.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowAnimatedExampleComponent implements OnInit {
  gridData = signal<Row[]>([]);
  gridDataHttp = of(sampleData).pipe(delay(1000));

  ngOnInit(): void {
    this.gridDataHttp.subscribe((data) => {
      this.gridData.set([...data]);
    });
  }
}
