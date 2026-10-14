import classNames from 'classnames';
import '../button.styles.scss';
import type { ButtonBaseProps } from './buttonBase.types';

export function ButtonBase({
  icon,
  leftText,
  name,
  rightText,
  className,
  variant = 'ghost',
  ...buttonProps
}: ButtonBaseProps) {
  return (
    <button
      {...buttonProps}
      name={name}
      aria-label={buttonProps['aria-label'] ?? name}
      title={buttonProps.title ?? name}
      className={classNames(
        'inline-flex',
        'align-items-center',
        'justify-content-center',
        'radius-button',
        'font-bold',
        'gap-small',
        {
          'background-primary': variant === 'primary',
          'background-soft-sand': variant === 'secondary',
          'background-transparent': variant === 'ghost',
        },
        {
          'text-on-accent': variant === 'primary' || variant === 'danger',
          'text-muted': variant === 'secondary' || variant === 'ghost',
        },
        { 'padding-button': variant !== 'ghost', 'padding-button-compact': variant === 'ghost' },
        { 'button-primary': variant === 'primary', 'button-danger': variant === 'danger' },
        className,
      )}
    >
      {leftText && <span>{leftText}</span>}
      {icon}
      {rightText && <span>{rightText}</span>}
    </button>
  );
}
