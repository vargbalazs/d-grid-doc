import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeBlockComponent } from '../../../../components/code-block/code-block';

@Component({
  selector: 'docs-core-features-column-visibility',
  imports: [CodeBlockComponent],
  templateUrl: './visibility.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnVisibilityComponent {
  toggleVisSignal = `
        const updated = this.columns().map((col) =>
          col.field === 'email' ? { ...col, hidden: !col.hidden } : col
        );
        this.columns.set(updated);
    `;

  toggleVisWithElement = `

        <d-grid-column field="name" header="name" [width]="100" [hidden]="true"></d-grid-column>
        
    `;
}
