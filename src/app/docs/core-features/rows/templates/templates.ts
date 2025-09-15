import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeBlockComponent } from '../../../../components/code-block/code-block';

@Component({
  selector: 'docs-core-features-rows-templates',
  imports: [CodeBlockComponent],
  templateUrl: './templates.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowTemplatesComponent {
  loadingTempl = `
    <d-grid [data]="gridData()" [asyncData]="true">
      <d-grid-column field="id" header="id" [width]="50"> </d-grid-column>
      <d-grid-column field="id" header="id2" [width]="50"></d-grid-column>
      <d-grid-column field="name" header="name" [width]="100"></d-grid-column>
      <d-grid-column field="email" header="email" [width]="150"> </d-grid-column>
      <d-grid-column field="active" header="active" [width]="100"> </d-grid-column>
      <ng-template dGridLoadingTemplate>
        <div>custom loading template</div>
      </ng-template>
    </d-grid>
    `;

  noDataTempl = `
    <d-grid [data]="gridData()" [asyncData]="true">
      <d-grid-column field="id" header="id" [width]="50"> </d-grid-column>
      <d-grid-column field="id" header="id2" [width]="50"></d-grid-column>
      <d-grid-column field="name" header="name" [width]="100"></d-grid-column>
      <d-grid-column field="email" header="email" [width]="150"> </d-grid-column>
      <d-grid-column field="active" header="active" [width]="100"> </d-grid-column>
      <ng-template dGridNoDataTemplate>
        <div>custom no-data template</div>
      </ng-template>
    </d-grid>
  `;
}
