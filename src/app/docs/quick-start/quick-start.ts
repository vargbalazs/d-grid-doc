import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeBlockComponent } from '../../components/code-block/code-block';
import { RouterLink } from '@angular/router';
import { QuickStartExampleComponent } from './example/example';
import { KENDO_TABSTRIP } from '@progress/kendo-angular-layout';

@Component({
  selector: 'docs-quick-start',
  imports: [CodeBlockComponent, RouterLink, QuickStartExampleComponent, KENDO_TABSTRIP],
  templateUrl: './quick-start.html',
  styleUrl: './quick-start.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuickStartComponent {
  npm = `
    
        npm i d-grid-angular
    
    `;
}
