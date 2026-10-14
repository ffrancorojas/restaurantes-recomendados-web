import type { CSSProperties } from 'react';
export const styles: Record<string, CSSProperties> = {
  screen: { maxWidth: 1120, margin: 'auto', padding: '0 28px 80px' },
  error: {
    padding: '10px 14px',
    color: 'var(--color-danger)',
    background: 'color-mix(in srgb, var(--color-danger) 12%, var(--color-surface))',
    borderRadius: 'var(--radius-md)',
    fontSize: 'var(--font-size-md)',
  },
};
