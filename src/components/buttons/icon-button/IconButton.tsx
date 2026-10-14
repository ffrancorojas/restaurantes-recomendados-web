import { ButtonBase } from '../button-base';
import { Icon } from '@components/icons';
import type { IconButtonProps } from './iconButton.types';

export function IconButton({
  iconName,
  name,
  leftText,
  rightText,
  style,
  ...buttonProps
}: IconButtonProps) {
  return (
    <ButtonBase
      {...buttonProps}
      name={name}
      icon={<Icon name={iconName} />}
      leftText={leftText}
      rightText={rightText}
      style={{ fontSize: 22, lineHeight: 1, padding: '0 4px', ...style }}
    />
  );
}
