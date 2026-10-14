import type { CSSProperties } from 'react';

export const styles: Record<string, CSSProperties> = {
  container: { display: 'flex', gap: '0.5rem' },
  compact: { gap: '0.375rem' },
  linkButton: {
    width: 'var(--field-height)',
    height: 'var(--field-height)',
    padding: 0,
    background: 'var(--color-soft-sand)',
    borderRadius: 'var(--radius-md)',
  },
  mapsButton: { color: 'var(--color-map)' },
  googleButton: { color: '#4285F4' },
  compactButton: { width: '1.75rem', height: '2rem' },
};
