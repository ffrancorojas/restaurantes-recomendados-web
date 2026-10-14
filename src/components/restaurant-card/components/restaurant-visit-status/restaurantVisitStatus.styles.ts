import type { CSSProperties } from 'react';

export const styles: Record<string, CSSProperties> = {
  button: {
    minHeight: 32,
    padding: '0 12px',
    color: 'var(--color-map)',
    textAlign: 'left',
    background: 'var(--color-soft-green)',
    borderRadius: 'var(--radius-button)',
    fontSize: 'var(--font-size-xs)',
    fontWeight: 800,
    whiteSpace: 'nowrap',
  },
  visited: { display: 'flex', alignItems: 'center', gap: 8, minHeight: 32 },
  visitedIcon: { color: 'var(--color-map)', fontWeight: 900, fontSize: 19, lineHeight: 1 },
};
