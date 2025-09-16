import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeBlockComponent } from '../../../../components/code-block/code-block';

@Component({
  selector: 'docs-core-features-rows-sticky',
  imports: [CodeBlockComponent],
  templateUrl: './sticky.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowStickyComponent {
  stickyFnDef = `

        stickyRows?: (row: DGridRow) => boolean;

    `;

  stickyFn = `
    rowIsSticky = (row: DGridRow) => {
      return (row.data as Row).id % 10 === 0;
    };
    `;
}
