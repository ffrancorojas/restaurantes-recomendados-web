export const ICONS = {
  edit: '✎',
  delete: '⌫',
  close: '×',
  back: '←',
  add: '＋',
  location: '⌖',
  favorite: '♡',
  favoriteFilled: '♥',
  menu: '☰',
  search: '⌕',
  google: 'G',
  share: '↗',
  filter: '☷',
  chevronDown: '⌄',
  chevronUp: '⌃',
} as const;

export type IconName = keyof typeof ICONS;
