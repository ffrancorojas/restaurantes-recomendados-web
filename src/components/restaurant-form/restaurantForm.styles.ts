import type { CSSProperties } from 'react';
export const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: '100vh',
    width: '100%',
    padding: '0 0 56px',
    background: 'var(--color-background)',
  },
  pageForm: {
    width: '100%',
    minHeight: '100vh',
    margin: 0,
    padding: 28,
    background: 'transparent',
    border: 0,
    borderRadius: 0,
    boxShadow: 'none',
  },
  error: {
    margin: '0 0 16px',
    padding: '10px 12px',
    color: 'var(--color-danger)',
    background: 'var(--color-soft-sand)',
    borderRadius: 'var(--radius-md)',
    fontSize: 'var(--font-size-sm)',
  },
  localityRow: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) auto',
    gap: 10,
    alignItems: 'start',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: 7,
    marginBottom: 16,
    color: 'var(--color-muted)',
    fontSize: 'var(--font-size-sm)',
    fontWeight: 700,
  },
  actions: { display: 'flex', justifyContent: 'flex-end', gap: 10, paddingTop: 10 },
};
