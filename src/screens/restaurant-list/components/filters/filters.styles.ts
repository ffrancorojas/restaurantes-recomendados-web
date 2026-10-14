import type { CSSProperties } from 'react';
export const styles: Record<string, CSSProperties> = {
  container: { display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '1.75rem' },
  row: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.625rem' },
};
