import type { ButtonHTMLAttributes, CSSProperties } from 'react';

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'style'> & {
  text: string;
  variant?: ButtonVariant;
  style?: CSSProperties;
};
