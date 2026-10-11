import type { CSSProperties } from 'react';
export const styles: Record<string, CSSProperties> = {
  tags: { display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto', paddingTop: 18 },
  tag: {
    padding: '6px 9px',
    color: 'var(--color-muted)',
    background: 'var(--color-soft-sand)',
    borderRadius: 'var(--radius-pill)',
    fontSize: 'var(--font-size-xs)',
  },
  visited: {
    padding: '6px 9px',
    color: 'var(--color-secondary)',
    background: 'var(--color-soft-green)',
    borderRadius: 'var(--radius-pill)',
    fontSize: 'var(--font-size-xs)',
    fontWeight: 700,
  },
};
