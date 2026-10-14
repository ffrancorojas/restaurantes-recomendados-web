import type { CSSProperties } from 'react';
export const styles: Record<string, CSSProperties> = {
  container: {
    position: 'fixed',
    right: '1.5rem',
    bottom: '1.5rem',
    zIndex: 4,
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.875rem',
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-button)',
    boxShadow: 'var(--shadow-floating)',
  },
  copy: { display: 'flex', flexDirection: 'column' },
  install: {
    padding: '0.5625rem 0.875rem',
    color: 'var(--color-surface)',
    background: 'var(--color-secondary)',
    borderRadius: 'var(--radius-sm)',
    fontWeight: 700,
  },
};
