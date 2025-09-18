import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'docs-core-features-column-sizing',
  imports: [RouterLink],
  templateUrl: './sizing.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnSizingComponent {}
