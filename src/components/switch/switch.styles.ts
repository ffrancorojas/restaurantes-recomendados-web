import type { CSSProperties } from 'react';
import type { SxProps, Theme } from '@mui/material';

export const styles: Record<string, CSSProperties> = {
  label: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0.75rem',
    width: '100%',
  },
  input: { position: 'absolute', opacity: 0, pointerEvents: 'none' },
  track: {
    display: 'flex',
    alignItems: 'center',
    width: '2.625rem',
    height: '1.5rem',
    padding: '0.1875rem',
    background: 'var(--color-border)',
    borderRadius: 999,
    transition: 'background .2s ease',
  },
  trackOn: { background: 'var(--color-secondary)' },
  thumb: {
    width: '1.125rem',
    height: '1.125rem',
    background: 'var(--color-surface)',
    borderRadius: '50%',
    boxShadow: '0 0.0625rem 0.1875rem #0002',
    transition: 'transform .2s ease',
  },
  thumbOn: { transform: 'translateX(1.125rem)' },
};

export const muiStyles: Record<'label' | 'switch', SxProps<Theme>> = {
  label: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    margin: '0 0 1rem',
    color: 'var(--color-text)',
    fontWeight: 700,
  },
  switch: {
    '& .MuiSwitch-switchBase.Mui-checked': { color: 'var(--color-secondary)' },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: 'var(--color-secondary)',
      opacity: 1,
    },
  },
};
