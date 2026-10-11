import { ButtonBase } from '../button-base';
import { ICONS } from '../buttons.tools';
import type { TextButtonProps } from './textButton.types';

export function TextButton({ iconName, leftText, rightText, ...buttonProps }: TextButtonProps) {
  return (
    <ButtonBase
      {...buttonProps}
      variant={buttonProps.variant ?? 'primary'}
      icon={iconName ? <span aria-hidden="true">{ICONS[iconName]}</span> : undefined}
      leftText={leftText}
      rightText={rightText}
    />
  );
}
