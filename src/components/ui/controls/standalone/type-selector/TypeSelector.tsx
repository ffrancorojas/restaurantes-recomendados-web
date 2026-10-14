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
      className="flex flex-wrap gap-small radius-toggle-group"
      aria-label="Tipos de cocina"
    >
      {RESTAURANT_TYPES.map((type) => {
        const isSelected = value.includes(type);
        const label = `${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()}`;

        return (
          <ToggleButton
            key={type}
            value={type}
            className="padding-button-compact font-semibold type-selector-button"
          >
            {isSelected ? '✓ ' : ''}{label}
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
}
