import type { SxProps, Theme } from '@mui/material';

export const muiStyles: Record<'checkbox', SxProps<Theme>> = {
  checkbox: { color: 'var(--color-border)', '&.Mui-checked': { color: 'var(--color-secondary)' } },
};
