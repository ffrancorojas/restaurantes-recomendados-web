import type { CSSProperties } from 'react';
export const styles: Record<string, CSSProperties> = {
  label: { margin: '0 0 0.5rem', color: 'var(--color-text)', fontWeight: 800 },
  container: { display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' },
  button: {
    display: 'flex',
    minHeight: '3.25rem',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 0.625rem',
    color: 'var(--color-muted)',
    background: 'var(--color-soft-sand)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-pill)',
    fontSize: 'var(--font-size-xs)',
  },
  selected: {
    color: 'var(--color-secondary)',
    background: 'var(--color-soft-green)',
    borderColor: 'var(--color-secondary)',
  },
};
