import type { CSSProperties } from 'react';

export const styles: Record<string, CSSProperties> = {
  container: {
    display: 'grid',
    placeItems: 'center',
    gap: 14,
    padding: '110px 20px',
    color: 'var(--color-muted)',
    textAlign: 'center',
  },
  spinner: {
    border: '3px solid var(--color-border)',
    borderTopColor: 'var(--color-primary)',
    borderRadius: '50%',
    animation: 'spin .8s linear infinite',
  },
};
