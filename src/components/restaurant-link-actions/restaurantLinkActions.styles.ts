import type { CSSProperties } from 'react';

export const styles: Record<string, CSSProperties> = {
  container: { display: 'flex', gap: 8 },
  compact: { gap: 6 },
  linkButton: {
    width: 'var(--field-height)',
    height: 'var(--field-height)',
    padding: 0,
    background: 'var(--color-soft-sand)',
    borderRadius: 'var(--radius-md)',
  },
  mapsButton: { color: 'var(--color-map)' },
  googleButton: { color: '#4285F4' },
  compactButton: { width: 28, height: 32 },
};
