import type { ButtonHTMLAttributes } from 'react';
import type { ButtonVariant } from '../button.types';
import type { IconName } from '@components/ui/icons';

type TextButtonContentProps =
  { leftText: string; rightText?: never } | { leftText?: never; rightText: string };

export type TextButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'style'> &
  TextButtonContentProps & { iconName?: IconName; variant?: ButtonVariant };
