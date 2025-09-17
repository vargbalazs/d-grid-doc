import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { INTERNAL_VARIABLES } from './variables-data';

@Component({
  selector: 'docs-layout-styling-variables',
  imports: [RouterLink],
  templateUrl: './variables.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CssVariablesComponent {
  internalVariables = INTERNAL_VARIABLES;
}
