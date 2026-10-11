import type { ButtonHTMLAttributes } from 'react';
import type { ButtonStyleProps, ButtonVariant } from '../button.types';
import type { IconName } from '../buttons.tools';

type TextButtonContentProps =
  { leftText: string; rightText?: never } | { leftText?: never; rightText: string };

export type TextButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'style'> &
  ButtonStyleProps &
  TextButtonContentProps & {
    iconName?: IconName;
    variant?: ButtonVariant;
  };
