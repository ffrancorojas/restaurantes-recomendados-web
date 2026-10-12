import type { CSSProperties } from 'react';

export const styles: Record<string, CSSProperties> = {
  hero: { display: 'flex', alignItems: 'end', justifyContent: 'space-between', marginBottom: 42 },
  eyebrow: {
    margin: '0 0 14px',
  },
  heading: {
    margin: '0 0 10px',
    fontSize: 'clamp(36px, 5vw, 58px)',
    lineHeight: 1,
    letterSpacing: '-.06em',
  },
  muted: { margin: 0 },
};
