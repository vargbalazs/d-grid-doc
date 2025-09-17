import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeBlockComponent } from '../../../../components/code-block/code-block';

@Component({
  selector: 'docs-core-features-rows-animated',
  imports: [CodeBlockComponent],
  templateUrl: './animated.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowAnimatedComponent {}
