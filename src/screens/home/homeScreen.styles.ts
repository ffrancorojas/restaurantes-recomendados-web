import type { CSSProperties } from 'react';

export const styles: Record<string, CSSProperties> = {
  screen: {
    minHeight: '100vh',
    display: 'grid',
    gridTemplateRows: '1fr auto',
    padding: '2rem 1.75rem 1.5rem',
    background: 'var(--color-background)',
  },
  content: {
    width: '100%',
    maxWidth: '35rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    justifySelf: 'center',
  },
  eyebrow: {
    margin: '0 0 0.875rem',
  },
  title: {
    margin: 0,
    color: 'var(--color-text)',
    fontSize: 'clamp(3rem, 9vw, 4.875rem)',
    lineHeight: 0.98,
    letterSpacing: '-.06em',
  },
  accent: { fontStyle: 'normal' },
  subtitle: {
    maxWidth: '28.75rem',
    margin: '1.125rem 0 1.75rem',
    fontSize: 'var(--font-size-lg)',
  },
  actions: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '0.75rem',
    width: '100%',
    maxWidth: '22.5rem',
  },
  actionButton: { width: '100%', justifyContent: 'center' },
  footer: { display: 'flex', justifyContent: 'center', paddingTop: '1.5rem' },
};
