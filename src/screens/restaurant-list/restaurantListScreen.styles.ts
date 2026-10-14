import type { CSSProperties } from 'react';
export const styles: Record<string, CSSProperties> = {
  screen: { maxWidth: '70rem', margin: 'auto', padding: '1.75rem 1.75rem 5rem' },
  error: {
    padding: '0.625rem 0.875rem',
    color: 'var(--color-danger)',
    background: 'color-mix(in srgb, var(--color-danger) 12%, var(--color-surface))',
    borderRadius: 'var(--radius-md)',
    fontSize: 'var(--font-size-md)',
  },
};
