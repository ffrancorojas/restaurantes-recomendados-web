import type { CSSProperties } from 'react';
export const styles: Record<string, CSSProperties> = {
  location: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 3,
    color: 'var(--color-muted)',
    fontSize: 12,
    flexShrink: 1,
  },
  collapsed: { minWidth: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
};
