import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { D_GRID } from 'd-grid-angular';
import { Row } from '../row';
import { sampleData } from '../data';

@Component({
  selector: 'docs-core-features-column-visibility-example2',
  imports: [D_GRID],
  templateUrl: './example-with-elements.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnVisWithElementsComponent {
  gridData = signal<Row[]>(sampleData);
  emailHidden = false;

  toggle() {
    this.emailHidden = !this.emailHidden;
  }
}
