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
