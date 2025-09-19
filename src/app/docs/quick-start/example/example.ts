import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CodeBlockComponent } from '../../../components/code-block/code-block';
import { D_GRID } from 'd-grid-angular';
import { Row } from './row';
import { sampleData } from './data';

@Component({
  selector: 'docs-quick-start-example',
  imports: [CodeBlockComponent, D_GRID],
  templateUrl: './example.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuickStartExampleComponent {
  gridData = signal<Row[]>(sampleData);
}
