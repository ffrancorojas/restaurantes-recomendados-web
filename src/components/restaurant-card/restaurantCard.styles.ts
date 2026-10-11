import type { CSSProperties } from 'react';
export const styles: Record<string, CSSProperties> = {
  card: {
    minHeight: 'var(--card-min-height)',
    display: 'flex',
    flexDirection: 'column',
    padding: 22,
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-card)',
    boxShadow: 'var(--shadow-card)',
  },
  top: { display: 'flex', justifyContent: 'space-between' },
  pin: { color: 'var(--color-primary)', fontSize: 24 },
  title: { margin: '18px 0 4px', fontSize: 'var(--font-size-xl)', letterSpacing: '-.03em' },
};
