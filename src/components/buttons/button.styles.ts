import type { CSSProperties } from 'react';

export const styles: Record<string, CSSProperties> = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    borderRadius: 'var(--radius-button)',
    fontWeight: 750,
  },
  primary: {
    padding: '0.875rem 1.25rem',
    color: 'var(--color-surface)',
    background: 'var(--color-primary)',
    boxShadow: '0 0.5rem 1rem color-mix(in srgb, var(--color-primary) 14%, transparent)',
  },
  secondary: {
    padding: '0.875rem 1.25rem',
    color: 'var(--color-muted)',
    background: 'var(--color-soft-sand)',
  },
  ghost: {
    padding: '0.5rem 0.75rem',
    color: 'var(--color-muted)',
    background: 'transparent',
  },
  danger: {
    padding: '0.875rem 1.25rem',
    color: 'var(--color-surface)',
    background: 'var(--color-danger)',
  },
};
