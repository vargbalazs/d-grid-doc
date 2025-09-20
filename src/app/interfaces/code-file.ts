export interface CodeFile {
  fileName: string;
  code: string;
  lang: 'html' | 'css' | 'typescript';
  showLineNumbers: boolean;
  selected?: boolean;
}
