import type { CSSProperties } from 'react';
export const styles: Record<string, CSSProperties> = {
  tags: { display: 'flex', flexWrap: 'wrap', gap: '0.375rem' },
  tag: {
    alignSelf: 'flex-start',
    padding: '0.1875rem 0.4375rem',
    color: 'var(--color-map)',
    background: 'var(--color-soft-green)',
    borderRadius: 12,
    fontSize: '0.6875rem',
    fontWeight: 800,
  },
};
