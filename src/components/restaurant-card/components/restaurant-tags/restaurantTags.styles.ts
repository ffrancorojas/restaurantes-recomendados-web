import type { CSSProperties } from 'react';
export const styles: Record<string, CSSProperties> = {
  tags: { display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8, paddingTop: 0 },
  tag: {
    alignSelf: 'flex-start',
    padding: '3px 7px',
    color: 'var(--color-map)',
    background: 'var(--color-soft-green)',
    borderRadius: 12,
    fontSize: 11,
    fontWeight: 800,
  },
};
