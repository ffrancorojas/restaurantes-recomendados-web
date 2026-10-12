import type { CSSProperties } from 'react';
export const styles: Record<string, CSSProperties> = {
  header: {
    height: 'var(--header-height)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 max(28px, calc((100% - 1120px) / 2))',
    background: 'var(--color-surface)',
    borderBottom: '1px solid var(--color-border)',
  },
  wordmark: { display: 'flex', alignItems: 'center', gap: 10, lineHeight: 1 },
  mark: {
    display: 'grid',
    placeItems: 'center',
    width: 'var(--icon-size)',
    height: 'var(--icon-size)',
    color: 'var(--color-surface)',
    background: 'var(--color-primary)',
    borderRadius: 10,
  },
  name: { fontSize: 14 },
  accent: { color: 'var(--color-primary)', fontStyle: 'normal' },
  account: {
    display: 'flex',
    alignItems: 'center',
    gap: 18,
    color: 'var(--color-muted)',
    fontSize: 14,
  },
  logout: {
    paddingLeft: 18,
    color: 'var(--color-muted)',
    fontSize: 13,
    background: 'none',
    borderLeft: '1px solid var(--color-border)',
    whiteSpace: 'nowrap',
  },
};
