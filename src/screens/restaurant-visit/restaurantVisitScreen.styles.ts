import type { CSSProperties } from 'react';

export const styles: Record<string, CSSProperties> = {
  page: { minHeight: '100vh', padding: '0 28px 80px', background: 'var(--color-background)' },
  form: {
    width: '100%',
    maxWidth: 680,
    margin: '0 auto',
    padding: 28,
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-card)',
    boxShadow: 'var(--shadow-card)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 22,
  },
  eyebrow: {
    margin: '0 0 8px',
    color: 'var(--color-muted)',
    fontSize: 'var(--font-size-xs)',
    fontWeight: 800,
    letterSpacing: '.08em',
  },
  title: { margin: 0, fontSize: 'var(--font-size-xl)', fontWeight: 900 },
  summary: {
    marginBottom: 20,
    padding: 16,
    background: 'var(--color-soft-sand)',
    borderRadius: 'var(--radius-md)',
  },
  name: { margin: '0 0 10px', fontSize: 'var(--font-size-lg)' },
  row: { margin: '0 0 6px', color: 'var(--color-muted)', fontSize: 'var(--font-size-sm)' },
  error: { color: 'var(--color-danger)', fontSize: 'var(--font-size-sm)' },
  actions: { display: 'flex', justifyContent: 'flex-end', paddingTop: 10 },
};
