export const ICONS = {
  edit: '✎',
  delete: '⌫',
  close: '×',
  add: '＋',
  location: '⌖',
  favorite: '♡',
  favoriteFilled: '♥',
  menu: '☰',
  search: '⌕',
} as const;

export type IconName = keyof typeof ICONS;
