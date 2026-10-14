import type { CheckboxProps as MuiCheckboxProps } from '@mui/material';

export type CheckboxChangeParams = { checked: boolean };
export type CheckboxProps = Omit<MuiCheckboxProps, 'checked' | 'onChange'> & {
  checked: boolean;
  onChange: (params: CheckboxChangeParams) => void;
};
