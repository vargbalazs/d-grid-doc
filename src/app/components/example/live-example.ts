import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
import { KENDO_TABSTRIP } from '@progress/kendo-angular-layout';
import { CodeFile } from '../../interfaces/code-file';
import { CommonModule } from '@angular/common';
import { CodeBlockComponent } from '../code-block/code-block';

@Component({
  selector: 'live-example',
  imports: [KENDO_TABSTRIP, CommonModule, CodeBlockComponent],
  templateUrl: './live-example.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LiveExampleComponent {
  @Input() exampleTemplate!: TemplateRef<any>;
  @Input() codeFiles: CodeFile[] = [];
}
