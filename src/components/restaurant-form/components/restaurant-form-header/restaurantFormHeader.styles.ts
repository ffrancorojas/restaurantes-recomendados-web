import type { CSSProperties } from 'react';

export const styles: Record<string, CSSProperties> = {
  title: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.375rem',
  },
  backButton: { paddingLeft: 0 },
  heading: { margin: 0 },
};
