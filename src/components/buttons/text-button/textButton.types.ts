import type { ButtonHTMLAttributes } from 'react';
import type { ButtonStyleProps, ButtonVariant } from '../button.types';
import type { IconName } from '../buttons.tools';

export type TextButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'style'> &
  ButtonStyleProps & {
    text: string;
    iconName?: IconName;
    iconPosition?: 'left' | 'right';
    variant?: ButtonVariant;
  };
