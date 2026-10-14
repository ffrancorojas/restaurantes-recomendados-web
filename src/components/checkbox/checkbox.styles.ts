import type { CSSProperties } from 'react';
import type { SxProps, Theme } from '@mui/material';
export const styles: Record<string, CSSProperties> = {
  field: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '1rem',
    color: 'var(--color-muted)',
    fontSize: 'var(--font-size-sm)',
    fontWeight: 700,
  },
};

export const muiStyles: Record<'control' | 'checkbox', SxProps<Theme>> = {
  control: { margin: '0 0 1rem', color: 'var(--color-muted)', fontWeight: 700 },
  checkbox: { color: 'var(--color-border)', '&.Mui-checked': { color: 'var(--color-secondary)' } },
};
