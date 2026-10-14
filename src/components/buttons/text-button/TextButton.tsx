import { ButtonBase } from '../button-base';
import { Icon } from '@components/icons';
import type { TextButtonProps } from './textButton.types';

export function TextButton({ iconName, leftText, rightText, ...buttonProps }: TextButtonProps) {
  return (
    <ButtonBase
      {...buttonProps}
      variant={buttonProps.variant ?? 'primary'}
      icon={iconName ? <Icon name={iconName} /> : undefined}
      leftText={leftText}
      rightText={rightText}
    />
  );
}
