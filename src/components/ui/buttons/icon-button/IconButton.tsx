import classNames from 'classnames';
import { ButtonBase } from '../button-base';
import { Icon } from '@components/ui/icons';
import './iconButton.styles.scss';
import type { IconButtonProps } from './iconButton.types';

export function IconButton({
  iconName,
  iconSize = 22,
  name,
  leftText,
  rightText,
  className,
  ...buttonProps
}: IconButtonProps) {
  return (
    <ButtonBase
      {...buttonProps}
      name={name}
      icon={<Icon name={iconName} size={iconSize} />}
      leftText={leftText}
      rightText={rightText}
      className={classNames('icon-button-button', className)}
    />
  );
}
