import type { CSSProperties } from 'react';

export const styles: Record<string, CSSProperties> = {
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 18 },
  empty: { padding: '110px 20px', color: 'var(--color-muted)', textAlign: 'center' },
};
