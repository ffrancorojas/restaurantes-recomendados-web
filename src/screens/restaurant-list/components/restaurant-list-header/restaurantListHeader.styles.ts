import type { CSSProperties } from 'react';

export const styles: Record<string, CSSProperties> = {
  hero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headingRow: { display: 'flex', alignItems: 'center', gap: 16 },
  heading: {
    margin: 0,
    fontSize: 'clamp(36px, 5vw, 58px)',
    lineHeight: 1,
    letterSpacing: '-.06em',
  },
};
