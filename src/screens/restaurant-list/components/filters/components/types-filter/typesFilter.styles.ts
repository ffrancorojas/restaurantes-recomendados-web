import type { SxProps, Theme } from '@mui/material';

export const styles: Record<string, SxProps<Theme>> = {
  accordion: {
    marginBottom: '1rem',
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-md)',
    '&:before': { display: 'none' },
  },
  summary: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '2.75rem',
    padding: '0 0.75rem',
    color: 'var(--color-text)',
    cursor: 'pointer',
    fontSize: 'var(--font-size-sm)',
    fontWeight: 700,
  },
  options: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: '0.5rem',
    padding: '0 0.75rem 0.75rem',
  },
  option: {
    color: 'var(--color-muted)',
    fontSize: 'var(--font-size-sm)',
  },
  checkbox: { color: 'var(--color-border)', '&.Mui-checked': { color: 'var(--color-secondary)' } },
  clear: {
    gridColumn: '1 / -1',
    justifyContent: 'flex-start',
    padding: '0.375rem 0',
    fontSize: 'var(--font-size-xs)',
  },
};
