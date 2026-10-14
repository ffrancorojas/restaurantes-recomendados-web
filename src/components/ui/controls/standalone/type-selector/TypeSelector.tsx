import classNames from 'classnames';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { RESTAURANT_TYPES } from '@assets/constants';
import './typeSelector.styles.scss';
import type { TypeSelectorProps } from './typeSelector.types';

export function TypeSelector({ value, onChange }: TypeSelectorProps) {
  return (
    <ToggleButtonGroup
      value={value}
      onChange={(_, nextValue: string[]) =>
        onChange({ value: nextValue as TypeSelectorProps['value'] })
      }
      className="flex flex-wrap gap-small radius-pill-group"
      aria-label="Tipos de cocina"
    >
      {RESTAURANT_TYPES.map((type) => (
        <ToggleButton
          key={type}
          value={type}
          className={classNames('border-default', 'radius-pill', 'padding-button-compact', 'font-size-xs', 'text-muted', 'background-color-surface', 'type-selector-button', {
            ['background-color-soft-green text-secondary']: value.includes(type),
          })}
        >
          {type}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
