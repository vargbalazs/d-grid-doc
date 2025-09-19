import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeBlockComponent } from '../../components/code-block/code-block';
import { RouterLink } from '@angular/router';
import { QuickStartExampleComponent } from './example/example';

@Component({
  selector: 'docs-quick-start',
  imports: [CodeBlockComponent, RouterLink, QuickStartExampleComponent],
  templateUrl: './quick-start.html',
  styleUrl: './quick-start.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuickStartComponent {
  npm = `
    
        npm i d-grid-angular
    
    `;
}
