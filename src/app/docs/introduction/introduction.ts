import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeBlockComponent } from '../../components/code-block/code-block';

@Component({
  selector: 'docs-introduction',
  imports: [CodeBlockComponent],
  templateUrl: './introduction.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroductionComponent {
  gridStructureHtml = `
    <d-grid>
      <div class="d-grid-container">
        <d-grid-header class="d-grid-header">
          <div class="d-grid-header-row">
            <div class="d-grid-header-cell d-grid-cell"></div>
            <div class="d-grid-header-cell d-grid-cell"></div>
          </div>
        </d-grid-header>
        <d-grid-body>
          <div class="d-grid-body">
            <div class="d-grid-body-row">
              <div class="d-grid-body-cell d-grid-cell"></div>
              <div class="d-grid-body-cell d-grid-cell"></div>
            </div>
          </div>
        </d-grid-body>
        <d-grid-footer>
          <div class="d-grid-footer-row">
            <div class="d-grid-footer-cell d-grid-cell"></div>
            <div class="d-grid-footer-cell d-grid-cell"></div>
          </div>
        </d-grid-footer>
      </div>
    </d-grid>`;
}
