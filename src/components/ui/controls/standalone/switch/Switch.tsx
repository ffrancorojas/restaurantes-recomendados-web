import { muiStyles } from './switch.styles';
import { Switch as MuiSwitch } from '@mui/material';
import type { SwitchProps } from './switch.types';

export function Switch({ checked, onChange, ...switchProps }: SwitchProps) {
  return (
    <MuiSwitch
      {...switchProps}
      checked={checked}
      onChange={(event) => onChange({ checked: event.target.checked })}
      sx={muiStyles.switch}
    />
  );
}
