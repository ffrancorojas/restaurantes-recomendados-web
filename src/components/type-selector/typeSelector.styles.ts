import type { CSSProperties } from 'react';
import type { SxProps, Theme } from '@mui/material';

export const styles: Record<string, CSSProperties> = {
  container: { display: 'flex', flexWrap: 'wrap', gap: 8 },
  selected: {
    color: 'var(--color-secondary)',
    background: 'var(--color-soft-green)',
    borderColor: 'var(--color-secondary)',
  },
};

export const muiStyles: Record<'group' | 'button', SxProps<Theme>> = {
  group: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 1,
    '& .MuiToggleButtonGroup-grouped': {
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-pill)',
    },
  },
  button: {
    padding: '8px 11px',
    color: 'var(--color-muted)',
    backgroundColor: 'var(--color-surface)',
    borderColor: 'var(--color-border)',
    borderRadius: 'var(--radius-pill)',
    fontSize: 'var(--font-size-xs)',
    textTransform: 'none',
    '&.Mui-selected': {
      color: 'var(--color-secondary)',
      backgroundColor: 'var(--color-soft-green)',
      borderColor: 'var(--color-secondary)',
    },
  },
};
