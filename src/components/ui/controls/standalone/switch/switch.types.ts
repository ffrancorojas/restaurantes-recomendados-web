import type { SwitchProps as MuiSwitchProps } from '@mui/material';

export type SwitchChangeParams = { checked: boolean };
export type SwitchProps = Omit<MuiSwitchProps, 'checked' | 'onChange'> & {
  checked: boolean;
  onChange: (params: SwitchChangeParams) => void;
};
