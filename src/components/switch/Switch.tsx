import { muiStyles } from './switch.styles';
import { FormControlLabel, Switch as MuiSwitch } from '@mui/material';
import type { SwitchProps } from './switch.types';

export function Switch({ label, checked, onChange }: SwitchProps) {
  return (
    <FormControlLabel
      label={label}
      labelPlacement="start"
      sx={muiStyles.label}
      control={
        <MuiSwitch
          checked={checked}
          onChange={(event) => onChange({ checked: event.target.checked })}
          sx={muiStyles.switch}
        />
      }
    />
  );
}
