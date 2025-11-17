import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LiveExampleComponent } from '../../../../components/example/live-example';
import { GroupingHeaderTemplateExampleComponent } from './group-header-example/group-header-example';
import { CodeFile } from '../../../../interfaces/code-file';

@Component({
  selector: 'docs-adv-features-grouping-templates',
  imports: [LiveExampleComponent, GroupingHeaderTemplateExampleComponent],
  templateUrl: './templates.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupingTemplatesComponent {
  codeFiles: CodeFile[] = [];
}
