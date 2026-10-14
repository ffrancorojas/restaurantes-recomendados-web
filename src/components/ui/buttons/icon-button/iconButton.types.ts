import type { ButtonHTMLAttributes } from 'react';
import type { IconName } from '@components/ui/icons';

export type IconButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children' | 'style'
> & { iconName: IconName; name: string; leftText?: string; rightText?: string };
