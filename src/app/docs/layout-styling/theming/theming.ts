import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeBlockComponent } from '../../../components/code-block/code-block';

@Component({
  selector: 'docs-layout-styling-theming',
  imports: [CodeBlockComponent],
  templateUrl: './theming.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemingComponent {
  rootClass = `

    <d-grid class="d-grid-root-20438242-1149-4bd8-9743-7f6336876a64"></d-grid>

  `;

  style = `

    <style class="d-grid-root-20438242-1149-4bd8-9743-7f6336876a64"></style>

  `;
}
