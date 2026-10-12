import type { CSSProperties } from 'react';
import type { SxProps, Theme } from '@mui/material';
export const styles: Record<string, CSSProperties> = {
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: 7,
    marginBottom: 16,
    color: 'var(--color-muted)',
    fontSize: 'var(--font-size-sm)',
    fontWeight: 700,
  },
  select: {
    minHeight: 'var(--field-height)',
    color: 'var(--color-text)',
    background: 'var(--color-surface)',
    borderRadius: 'var(--radius-md)',
  },
};

export const muiStyles: SxProps<Theme> = {
  marginBottom: 2,
  '& .MuiOutlinedInput-root': { borderRadius: 'var(--radius-md)' },
  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'var(--color-border)' },
  '& .MuiInputLabel-root': { color: 'var(--color-muted)', fontWeight: 600 },
};
