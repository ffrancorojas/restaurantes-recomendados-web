import type { CSSProperties } from 'react';

export const styles: Record<string, CSSProperties> = {
  hero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headingRow: { display: 'flex', alignItems: 'center', gap: 16 },
  actions: { display: 'flex', alignItems: 'stretch', gap: 8, flex: 1, marginLeft: 24 },
  createButton: { flex: 1 },
  heading: {
    margin: 0,
    fontSize: 'clamp(36px, 5vw, 58px)',
    lineHeight: 1,
    letterSpacing: '-.06em',
  },
};
