import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeBlockComponent } from '../../../../components/code-block/code-block';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'docs-core-features-column-sizing',
  imports: [CodeBlockComponent, RouterLink],
  templateUrl: './sizing.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnSizingComponent {}
