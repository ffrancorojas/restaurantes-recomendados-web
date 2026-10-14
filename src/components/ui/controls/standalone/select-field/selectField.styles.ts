import type { SxProps, Theme } from '@mui/material';

export const muiStyles: SxProps<Theme> = {
  minHeight: 'var(--field-height)',
  color: 'var(--color-text)',
  backgroundColor: 'var(--color-surface)',
  borderRadius: 'var(--radius-md)',
  '& .MuiSelect-icon': { right: '0.875rem', color: 'var(--color-muted)' },
  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'var(--color-border)' },
  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'var(--color-muted)' },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'var(--color-secondary)' },
};
