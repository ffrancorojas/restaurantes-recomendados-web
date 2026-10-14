import type { CSSProperties } from 'react';

export const styles: Record<string, CSSProperties> = {
  page: { minHeight: '100vh', padding: '0 1.75rem 5rem', background: 'var(--color-background)' },
  form: {
    width: '100%',
    maxWidth: '42.5rem',
    margin: '0 auto',
    padding: '1.75rem',
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-card)',
    boxShadow: 'var(--shadow-card)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '0.75rem',
    marginBottom: '1.375rem',
  },
  eyebrow: {
    margin: '0 0 0.5rem',
    color: 'var(--color-muted)',
    fontSize: 'var(--font-size-xs)',
    fontWeight: 800,
    letterSpacing: '.08em',
  },
  title: { margin: 0, fontSize: 'var(--font-size-xl)', fontWeight: 900 },
  summary: {
    marginBottom: '1.25rem',
    padding: '1rem',
    background: 'var(--color-soft-sand)',
    borderRadius: 'var(--radius-md)',
  },
  name: { margin: '0 0 0.625rem', fontSize: 'var(--font-size-lg)' },
  row: { margin: '0 0 0.375rem', color: 'var(--color-muted)', fontSize: 'var(--font-size-sm)' },
  error: { color: 'var(--color-danger)', fontSize: 'var(--font-size-sm)' },
  actions: { display: 'flex', justifyContent: 'flex-end', paddingTop: '0.625rem' },
};
