import type { SxProps, Theme } from '@mui/material';

export const muiStyles: Record<'switch', SxProps<Theme>> = {
  switch: {
    '& .MuiSwitch-switchBase.Mui-checked': { color: 'var(--color-secondary)' },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: 'var(--color-secondary)',
      opacity: 1,
    },
  },
};
