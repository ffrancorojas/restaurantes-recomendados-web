import type { CSSProperties } from 'react';
export const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: '100vh',
    width: '100%',
    padding: '0 0 3.5rem',
    background: 'var(--color-background)',
  },
  pageForm: {
    width: '100%',
    minHeight: '100vh',
    margin: 0,
    padding: '1.75rem',
    background: 'transparent',
    border: 0,
    borderRadius: 0,
    boxShadow: 'none',
  },
  error: {
    margin: '0 0 1rem',
    padding: '0.625rem 0.75rem',
    color: 'var(--color-danger)',
    background: 'var(--color-soft-sand)',
    borderRadius: 'var(--radius-md)',
    fontSize: 'var(--font-size-sm)',
  },
  localityRow: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) auto',
    gap: '0.625rem',
    alignItems: 'start',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4375rem',
    marginBottom: '1rem',
    color: 'var(--color-muted)',
    fontSize: 'var(--font-size-sm)',
    fontWeight: 700,
  },
  actions: { display: 'flex', justifyContent: 'flex-end', gap: '0.625rem', paddingTop: '0.625rem' },
};
