import type { CSSProperties } from 'react';

export const styles: Record<string, CSSProperties> = {
  intro: {
    width: '100%',
    maxWidth: 680,
    margin: '0 auto 18px',
    padding: '48px 28px 0',
  },
  eyebrow: {
    margin: '0 0 10px',
    color: 'var(--color-secondary)',
    fontSize: 'var(--font-size-xs)',
    fontWeight: 800,
    letterSpacing: '.16em',
  },
  heading: { margin: 0, fontSize: 'var(--font-size-xxl)', letterSpacing: '-.04em' },
  description: { margin: '10px 0 0', color: 'var(--color-muted)' },
};
