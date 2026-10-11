import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';
import type { ButtonVariant } from '../button.types';

export type ButtonBaseProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children' | 'style' | 'name'
> & {
  icon?: ReactNode;
  leftText?: string;
  name?: string;
  rightText?: string;
  style?: CSSProperties;
  variant?: ButtonVariant;
};
