import type { CSSProperties } from 'react';
export const styles: Record<string, CSSProperties> = {
  container: {
    position: 'fixed',
    right: 24,
    bottom: 24,
    zIndex: 4,
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: 14,
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-button)',
    boxShadow: 'var(--shadow-floating)',
  },
  copy: { display: 'flex', flexDirection: 'column' },
  install: {
    padding: '9px 14px',
    color: 'var(--color-surface)',
    background: 'var(--color-secondary)',
    borderRadius: 'var(--radius-sm)',
    fontWeight: 700,
  },
};
