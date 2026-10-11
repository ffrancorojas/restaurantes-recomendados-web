import type { CSSProperties } from 'react';

export const styles: Record<string, CSSProperties> = {
  container: { display: 'flex', flexWrap: 'wrap', gap: 8 },
  button: {
    padding: '8px 11px',
    color: 'var(--color-muted)',
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-pill)',
    fontSize: 'var(--font-size-xs)',
  },
  selected: {
    color: 'var(--color-secondary)',
    background: 'var(--color-soft-green)',
    borderColor: 'var(--color-secondary)',
  },
};
