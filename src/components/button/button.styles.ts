import type { CSSProperties } from 'react';

export const styles: Record<string, CSSProperties> = {
  base: {
    padding: '14px 20px',
    borderRadius: 'var(--radius-button)',
    fontWeight: 750,
  },
  primary: {
    color: 'var(--color-surface)',
    background: 'var(--color-primary)',
    boxShadow: '0 8px 16px color-mix(in srgb, var(--color-primary) 14%, transparent)',
  },
  secondary: {
    color: 'var(--color-muted)',
    background: 'var(--color-soft-sand)',
  },
};
