import { MenuItem } from '../interfaces/menu-item';

export const menuItems: MenuItem[] = [
  { text: 'Getting started', isTitle: true },
  { text: 'Quick Start' },
  { text: 'Key Features' },
  { text: 'Layout & Styling', isTitle: true },
  { text: 'Theming' },
  { text: 'Design System' },
  { text: 'Grid Layout' },
  { text: 'Core Features', isTitle: true },
  { text: 'Columns', items: [{ text: 'Configuration' }, { text: 'Headers' }, { text: 'Sizing' }] },
  { text: 'Rows', items: [{ text: 'Data' }] },
  { text: 'Cells', items: [{ text: 'Cell Content' }] },
  { text: 'Filtering', items: [{ text: 'Overview' }] },
  { text: 'Selection', items: [{ text: 'Row Selection' }] },
  { text: 'Editing', items: [{ text: 'Overview' }] },
  { text: 'Advanced features', isTitle: true },
  { text: 'Row Grouping', items: [{ text: 'Overview' }] },
  { text: 'Aggregation', items: [{ text: 'Overview' }] },
];
