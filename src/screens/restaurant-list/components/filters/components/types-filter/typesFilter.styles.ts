import type { SxProps, Theme } from '@mui/material';

export const styles: Record<string, SxProps<Theme>> = {
  accordion: {
    marginBottom: 2,
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-md)',
    '&:before': { display: 'none' },
  },
  summary: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 44,
    padding: '0 12px',
    color: 'var(--color-text)',
    cursor: 'pointer',
    fontSize: 'var(--font-size-sm)',
    fontWeight: 700,
  },
  options: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: 8,
    padding: '0 12px 12px',
  },
  option: {
    color: 'var(--color-muted)',
    fontSize: 'var(--font-size-sm)',
  },
  checkbox: { color: 'var(--color-border)', '&.Mui-checked': { color: 'var(--color-secondary)' } },
  clear: {
    gridColumn: '1 / -1',
    justifyContent: 'flex-start',
    padding: '6px 0',
    fontSize: 'var(--font-size-xs)',
  },
};
