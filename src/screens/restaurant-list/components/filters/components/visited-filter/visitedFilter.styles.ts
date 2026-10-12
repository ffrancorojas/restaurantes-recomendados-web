import type { CSSProperties } from 'react';
export const styles: Record<string, CSSProperties> = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 44,
    padding: '0 12px',
    color: 'var(--color-text)',
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-md)',
  },
};
