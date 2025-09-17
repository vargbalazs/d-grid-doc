import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeBlockComponent } from '../../../components/code-block/code-block';

@Component({
  selector: 'docs-layout-styling-icons',
  imports: [CodeBlockComponent],
  templateUrl: './icons.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconsComponent {
  registerFontClass = `
    
        this.iconService.registerFontClass('sort-asc', 'fi fi-rs-marker');
    
    `;
}
