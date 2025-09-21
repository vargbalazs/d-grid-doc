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
