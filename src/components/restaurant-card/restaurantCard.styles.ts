import type { CSSProperties } from 'react';
export const styles: Record<string, CSSProperties> = {
  card: {
    minHeight: 0,
    display: 'flex',
    flexDirection: 'column',
    padding: 12,
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 16,
    boxShadow: 'none',
  },
  top: { display: 'flex', justifyContent: 'space-between' },
  title: {
    flex: 1,
    minWidth: 0,
    margin: 0,
    fontSize: 17,
    fontWeight: 900,
    letterSpacing: '-.02em',
  },
};
