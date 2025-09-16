import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeBlockComponent } from '../../../components/code-block/code-block';
import { RouterLink } from '@angular/router';
import { INTERNAL_VARIABLES } from './variables-data';

@Component({
  selector: 'docs-layout-styling-variables',
  imports: [CodeBlockComponent, RouterLink],
  templateUrl: './variables.html',
  styleUrl: './variables.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CssVariablesComponent {
  internalVariables = INTERNAL_VARIABLES;
}
