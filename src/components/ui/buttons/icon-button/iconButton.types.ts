import type { ButtonHTMLAttributes } from 'react';
import type { ButtonStyleProps } from '../button.types';
import type { IconName } from '@components/ui/icons';

export type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'style'> &
  ButtonStyleProps & {
    iconName: IconName;
    name: string;
    leftText?: string;
    rightText?: string;
  };
