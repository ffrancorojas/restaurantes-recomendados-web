import type { CSSProperties } from 'react';

export const styles: Record<string, CSSProperties> = {
  hero: { display: 'flex', alignItems: 'end', justifyContent: 'space-between', marginBottom: 42 },
  eyebrow: {
    margin: '0 0 14px',
    color: 'var(--color-secondary)',
    fontSize: 'var(--font-size-xs)',
    fontWeight: 800,
    letterSpacing: '.16em',
  },
  heading: {
    margin: '0 0 10px',
    fontSize: 'clamp(36px, 5vw, 58px)',
    lineHeight: 1,
    letterSpacing: '-.06em',
  },
  muted: { margin: 0, color: 'var(--color-muted)', fontSize: 'var(--font-size-md)' },
};
