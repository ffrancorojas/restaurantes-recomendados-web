import { ButtonBase } from '../button-base';
import { ICONS } from '../buttons.tools';
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
      icon={<span aria-hidden="true">{ICONS[iconName]}</span>}
      leftText={leftText}
      rightText={rightText}
      style={{ fontSize: 22, lineHeight: 1, padding: '0 4px', ...style }}
    />
  );
}
