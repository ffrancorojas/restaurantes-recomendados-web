import type { CSSProperties } from 'react';

export const styles: Record<string, CSSProperties> = {
  container: {
    display: 'grid',
    placeItems: 'center',
    gap: '0.875rem',
    padding: '6.875rem 1.25rem',
    color: 'var(--color-muted)',
    textAlign: 'center',
  },
  spinner: { color: 'var(--color-primary)' },
};
