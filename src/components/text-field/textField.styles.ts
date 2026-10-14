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
  input: {
    width: '100%',
    minHeight: 'var(--field-height)',
    padding: '13px 15px',
    color: 'var(--color-text)',
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-md)',
    outline: 'none',
  },
  inputError: { borderColor: 'var(--color-danger)' },
  error: { color: 'var(--color-danger)', fontSize: 'var(--font-size-xs)', fontWeight: 600 },
};

export const muiStyles: SxProps<Theme> = {
  marginBottom: 2,
  '& .MuiOutlinedInput-root': {
    minHeight: 'var(--field-height)',
    borderRadius: 'var(--radius-md)',
    backgroundColor: 'var(--color-surface)',
    '& input': {
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
  '& .MuiFormHelperText-root': { marginLeft: 0, color: 'var(--color-danger)' },
};
