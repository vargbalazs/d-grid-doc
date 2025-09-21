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
  gridDataHttp = of(sampleData).pipe(delay(3000));
  gridDataSignal = toSignal<Row[], Row[]>(this.gridDataHttp, {
    initialValue: [],
  });

  changeData() {
    const newData = [...sampleData2];
    const newObservable = of(newData).pipe(delay(3000));
    runInInjectionContext(this.injector, () => {
      this.gridDataSignal = toSignal(newObservable, {
        initialValue: [],
      });
    });
  }
}
