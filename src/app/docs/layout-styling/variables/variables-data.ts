interface Variables {
  rule: string;
  usedFor: string;
}

export const INTERNAL_VARIABLES: Variables[] = [
  {
    rule: '--d-grid-template-rows',
    usedFor: 'used for the row layout of the grid',
  },
  {
    rule: '--d-grid-header-height',
    usedFor:
      'stores the header height - used for determining the top position of the first sticky row',
  },
  {
    rule: '--d-grid-template-columns',
    usedFor: 'used for the column layout of the grid',
  },
];
