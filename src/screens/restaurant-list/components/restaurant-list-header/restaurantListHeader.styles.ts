import type { CSSProperties } from 'react';

export const styles: Record<string, CSSProperties> = {
  hero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headingRow: { display: 'flex', alignItems: 'center', gap: 16 },
  actions: { display: 'flex', alignItems: 'stretch', gap: 8, flex: 1, marginLeft: 24 },
  createButton: { flex: 1 },
  heading: {
    margin: 0,
    fontSize: 17,
    fontWeight: 800,
  },
};
