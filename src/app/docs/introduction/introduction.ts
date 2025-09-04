import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'docs-introduction',
  imports: [],
  templateUrl: './introduction.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroductionComponent {}
