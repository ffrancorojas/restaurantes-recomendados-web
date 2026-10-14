import type { CSSProperties } from 'react';
export const styles: Record<string, CSSProperties> = {
  label: { margin: '0 0 8px', color: 'var(--color-text)', fontWeight: 800 },
  container: { display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 },
  button: {
    display: 'flex',
    minHeight: 52,
    alignItems: 'center',
    gap: 8,
    padding: '8px 10px',
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
