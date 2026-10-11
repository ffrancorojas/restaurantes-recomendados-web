import type { CSSProperties } from 'react';

export const styles: Record<string, CSSProperties> = {
  container: { display: 'flex', gap: 8 },
  compact: { gap: 6 },
  mapsButton: {
    width: 42,
    height: 42,
    padding: 0,
    color: 'var(--color-map)',
    background: 'var(--color-soft-green)',
    borderRadius: 'var(--radius-md)',
  },
  googleButton: {
    width: 42,
    height: 42,
    padding: 0,
    color: '#4285F4',
    background: 'var(--color-soft-sand)',
    borderRadius: 'var(--radius-md)',
  },
  compactButton: { width: 34, height: 34 },
};
