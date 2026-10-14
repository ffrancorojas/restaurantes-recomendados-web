import type { CSSProperties } from 'react';

export const styles: Record<string, CSSProperties> = {
  hero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '0.625rem',
  },
  headingRow: { display: 'flex', alignItems: 'center', gap: '1rem' },
  actions: {
    display: 'flex',
    alignItems: 'stretch',
    gap: '0.5rem',
    flex: 1,
    minWidth: 0,
    marginLeft: 0,
    boxSizing: 'border-box',
  },
  createButton: { flex: 1, minWidth: 0, fontSize: '1rem', fontWeight: 800 },
  heading: {
    margin: 0,
    fontSize: '1.0625rem',
    fontWeight: 800,
  },
};
