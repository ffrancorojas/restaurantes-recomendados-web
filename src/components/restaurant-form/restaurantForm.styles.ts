import type { CSSProperties } from 'react';
export const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: '100vh',
    padding: '0 28px 80px',
    background: 'var(--color-background)',
  },
  pageForm: {
    width: '100%',
    maxWidth: 680,
    margin: '0 auto',
    padding: 28,
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-card)',
    boxShadow: 'var(--shadow-card)',
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
