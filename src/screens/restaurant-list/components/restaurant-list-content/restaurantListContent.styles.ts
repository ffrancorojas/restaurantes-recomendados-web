import type { CSSProperties } from 'react';

export const styles: Record<string, CSSProperties> = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    columnGap: '1.125rem',
    rowGap: '0.5rem',
  },
  empty: { padding: '6.875rem 1.25rem', color: 'var(--color-muted)', textAlign: 'center' },
};
