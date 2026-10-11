import type { ButtonHTMLAttributes } from 'react';
import type { ICONS } from './iconButton.tools';
export type IconName = keyof typeof ICONS;
export type IconButtonProps = {
  icon: IconName;
  label: string;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  disabled?: boolean;
};
