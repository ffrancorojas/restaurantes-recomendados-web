import type { ButtonHTMLAttributes } from 'react';
import type { ButtonStyleProps, ButtonVariant } from '../button.types';

export type TextButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'style'> &
  ButtonStyleProps & {
    text: string;
    variant?: ButtonVariant;
  };
