import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { RESTAURANT_TYPES } from '@assets/constants';
import { muiStyles } from './typeSelector.styles';
import type { TypeSelectorProps } from './typeSelector.types';

export function TypeSelector({ value, onChange }: TypeSelectorProps) {
  return (
    <ToggleButtonGroup
      value={value}
      onChange={(_, nextValue: string[]) =>
        onChange({ value: nextValue as TypeSelectorProps['value'] })
      }
      sx={muiStyles.group}
      aria-label="Tipos de cocina"
    >
      {RESTAURANT_TYPES.map((type) => (
        <ToggleButton key={type} value={type} sx={muiStyles.button}>
          {type}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
