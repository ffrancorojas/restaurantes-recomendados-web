import type { CSSProperties } from 'react';

export const styles: Record<string, CSSProperties> = {
  screen: {
    minHeight: '100vh',
    display: 'grid',
    gridTemplateRows: '1fr auto',
    padding: '32px 28px 24px',
    background: 'var(--color-background)',
  },
  content: {
    width: '100%',
    maxWidth: 560,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    justifySelf: 'center',
  },
  eyebrow: {
    margin: '0 0 14px',
  },
  title: {
    margin: 0,
    color: 'var(--color-text)',
    fontSize: 'clamp(48px, 9vw, 78px)',
    lineHeight: 0.98,
    letterSpacing: '-.06em',
  },
  accent: { fontStyle: 'normal' },
  subtitle: {
    maxWidth: 460,
    margin: '18px 0 28px',
    fontSize: 'var(--font-size-lg)',
  },
  actions: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 12,
    width: '100%',
    maxWidth: 360,
  },
  actionButton: { width: '100%', justifyContent: 'center' },
  footer: { display: 'flex', justifyContent: 'center', paddingTop: 24 },
};
