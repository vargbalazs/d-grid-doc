import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'code-block',
  imports: [CommonModule, Highlight, HighlightLineNumbers],
  templateUrl: './code-block.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeBlockComponent implements OnInit {
  @Input() code!: string;
  @Input() language!: string;
  @Input() showLineNumbers: boolean = true;

  indentedCode!: string;

  stripIndent(str: string): string {
    const lines = str.replace(/^\n/, '').split('\n');
    const indent = lines.find((line) => line.trim())?.match(/^(\s*)/)?.[1] ?? '';
    return lines
      .map((line) => (line.startsWith(indent) ? line.slice(indent.length) : line))
      .join('\n');
  }

  ngOnInit(): void {
    this.indentedCode = this.stripIndent(this.code);
  }
}
