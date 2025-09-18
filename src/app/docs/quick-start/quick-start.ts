import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeBlockComponent } from '../../components/code-block/code-block';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'docs-quick-start',
  imports: [CodeBlockComponent, RouterLink],
  templateUrl: './quick-start.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuickStartComponent {}
