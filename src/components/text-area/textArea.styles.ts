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
  textarea: {
    width: '100%',
    minHeight: 80,
    padding: '13px 15px',
    color: 'var(--color-text)',
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-md)',
    resize: 'vertical',
  },
};

export const muiStyles: SxProps<Theme> = {
  marginBottom: 2,
  '& .MuiOutlinedInput-root': {
    borderRadius: 'var(--radius-md)',
    backgroundColor: 'var(--color-surface)',
    '& textarea': {
      color: 'var(--color-text)',
      '&::placeholder': { color: 'var(--color-muted)', opacity: 1 },
    },
    '& fieldset': { borderColor: 'var(--color-border)' },
    '&:hover fieldset': { borderColor: 'var(--color-muted)' },
    '&.Mui-focused fieldset': { borderColor: 'var(--color-secondary)' },
  },
  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'var(--color-border)' },
  '& .MuiInputLabel-root': { color: 'var(--color-muted)', fontWeight: 600 },
  '& .MuiInputLabel-root.Mui-focused': { color: 'var(--color-secondary)' },
};
