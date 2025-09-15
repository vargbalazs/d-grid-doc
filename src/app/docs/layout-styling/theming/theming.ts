import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeBlockComponent } from '../../../components/code-block/code-block';

@Component({
  selector: 'docs-layout-styling-theming',
  imports: [CodeBlockComponent],
  templateUrl: './theming.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemingComponent {}
