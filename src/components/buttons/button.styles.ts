import type { CSSProperties } from 'react';

export const styles: Record<string, CSSProperties> = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 'var(--radius-button)',
    fontWeight: 750,
  },
  primary: {
    padding: '14px 20px',
    color: 'var(--color-surface)',
    background: 'var(--color-primary)',
    boxShadow: '0 8px 16px color-mix(in srgb, var(--color-primary) 14%, transparent)',
  },
  secondary: {
    padding: '14px 20px',
    color: 'var(--color-muted)',
    background: 'var(--color-soft-sand)',
  },
  ghost: {
    padding: '8px 12px',
    color: 'var(--color-muted)',
    background: 'transparent',
  },
  danger: {
    padding: '14px 20px',
    color: 'var(--color-surface)',
    background: 'var(--color-danger)',
  },
};
