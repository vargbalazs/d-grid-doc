import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeBlockComponent } from '../../../components/code-block/code-block';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'docs-quick-start-example',
  imports: [CodeBlockComponent, RouterLink],
  templateUrl: './example.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuickStartExampleComponent {}
