interface Icon {
  ident: string;
  usedFor: string;
}

export const ICONS: Icon[] = [
  {
    ident: 'sort-asc',
    usedFor: 'ascending sort',
  },
  {
    ident: 'sort-desc',
    usedFor: 'descending sort',
  },
  {
    ident: 'icon-missing',
    usedFor: 'placeholder for missing icon',
  },
];
