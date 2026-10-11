import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { ButtonStyleProps } from '../button.types';

export type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'style'> &
  ButtonStyleProps & {
    icon: ReactNode;
    name: string;
    leftText?: string;
    rightText?: string;
  };
