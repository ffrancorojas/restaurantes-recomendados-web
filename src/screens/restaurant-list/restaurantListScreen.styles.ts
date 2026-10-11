import type { CSSProperties } from 'react';
export const styles: Record<string, CSSProperties> = {
  screen: { maxWidth: 1120, margin: 'auto', padding: '60px 28px 80px' },
  hero: { display: 'flex', alignItems: 'end', justifyContent: 'space-between', marginBottom: 42 },
  eyebrow: {
    margin: '0 0 14px',
    color: 'var(--color-secondary)',
    fontSize: 'var(--font-size-xs)',
    fontWeight: 800,
    letterSpacing: '.16em',
  },
  heading: {
    margin: '0 0 10px',
    fontSize: 'clamp(36px, 5vw, 58px)',
    lineHeight: 1,
    letterSpacing: '-.06em',
  },
  muted: { margin: 0, color: 'var(--color-muted)', fontSize: 'var(--font-size-md)' },
  newButton: {
    padding: '14px 20px',
    color: 'var(--color-surface)',
    background: 'var(--color-primary)',
    borderRadius: 'var(--radius-button)',
    fontWeight: 750,
    boxShadow: '0 8px 16px color-mix(in srgb, var(--color-primary) 14%, transparent)',
  },
  error: {
    padding: '10px 14px',
    color: 'var(--color-danger)',
    background: 'color-mix(in srgb, var(--color-danger) 12%, var(--color-surface))',
    borderRadius: 'var(--radius-md)',
    fontSize: 'var(--font-size-md)',
  },
};
