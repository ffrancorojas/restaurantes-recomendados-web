import type { IconName } from '@components/ui/icons';

export type OverlayMenuItem = {
  text: string;
  onClick: () => void;
  iconName?: IconName;
  disabled?: boolean;
};

export type OverlayButtonProps = {
  id: string;
  iconName: IconName;
  iconSize?: number;
  name: string;
  disabled?: boolean;
  className?: string;
  menuClassName?: string;
  items: OverlayMenuItem[];
};
