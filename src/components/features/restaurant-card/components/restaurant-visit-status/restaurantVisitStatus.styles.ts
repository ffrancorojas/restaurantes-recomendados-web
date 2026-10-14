import type { CSSProperties } from 'react';

export const styles: Record<string, CSSProperties> = {
  button: {
    minHeight: '2rem',
    padding: '0 0.75rem',
    color: 'var(--color-map)',
    textAlign: 'left',
    background: 'var(--color-soft-green)',
    borderRadius: 'var(--radius-button)',
    fontSize: 'var(--font-size-xs)',
    fontWeight: 800,
    whiteSpace: 'nowrap',
  },
  visited: { display: 'flex', alignItems: 'center', gap: '0.5rem', minHeight: '2rem' },
  visitedIcon: { color: 'var(--color-map)', fontWeight: 900, fontSize: '1.1875rem', lineHeight: 1 },
};
