import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeBlockComponent } from '../../../components/code-block/code-block';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'docs-layout-styling-grid-layout',
  imports: [CodeBlockComponent, RouterLink],
  templateUrl: './grid-layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridLayoutComponent {
  sticky = `

        sticky: DGridSticky = { header: true, footer: false };

    `;
}
