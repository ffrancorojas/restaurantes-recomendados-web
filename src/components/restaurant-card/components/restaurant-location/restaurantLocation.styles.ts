import type { CSSProperties } from 'react';
export const styles: Record<string, CSSProperties> = {
  location: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.1875rem',
    color: 'var(--color-muted)',
    fontSize: '0.75rem',
    flexShrink: 1,
  },
  collapsed: { minWidth: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
};
