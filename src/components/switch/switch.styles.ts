import type { CSSProperties } from 'react';
import type { SxProps, Theme } from '@mui/material';

export const styles: Record<string, CSSProperties> = {
  label: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    width: '100%',
  },
  input: { position: 'absolute', opacity: 0, pointerEvents: 'none' },
  track: {
    display: 'flex',
    alignItems: 'center',
    width: 42,
    height: 24,
    padding: 3,
    background: 'var(--color-border)',
    borderRadius: 999,
    transition: 'background .2s ease',
  },
  trackOn: { background: 'var(--color-secondary)' },
  thumb: {
    width: 18,
    height: 18,
    background: 'var(--color-surface)',
    borderRadius: '50%',
    boxShadow: '0 1px 3px #0002',
    transition: 'transform .2s ease',
  },
  thumbOn: { transform: 'translateX(18px)' },
};

export const muiStyles: Record<'label' | 'switch', SxProps<Theme>> = {
  label: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    margin: '0 0 16px',
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
