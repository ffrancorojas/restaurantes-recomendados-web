import type { CSSProperties } from 'react';
export const styles: Record<string, CSSProperties> = {
  container: { display: 'flex', flexWrap: 'wrap', gap: 7 },
  button: {
    padding: '6px 9px',
    color: 'var(--color-muted)',
    background: 'var(--color-soft-sand)',
    border: '1px solid transparent',
    borderRadius: 'var(--radius-pill)',
    fontSize: 'var(--font-size-xs)',
  },
  selected: {
    color: 'var(--color-secondary)',
    background: 'var(--color-soft-green)',
    borderColor: 'var(--color-secondary)',
  },
};
