import type { CSSProperties } from 'react';
export const styles: Record<string, CSSProperties> = {
  container: { display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 },
  row: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 },
};
