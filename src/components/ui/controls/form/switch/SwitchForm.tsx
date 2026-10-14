import { FormControl, FormControlLabel, FormHelperText } from '@mui/material';
import { Controller, type FieldPathByValue, type FieldValues } from 'react-hook-form';
import { Switch } from '../../standalone/switch';
import { getFormFieldRules } from '../formField.types';
import { styles } from './switchForm.styles';
import type { SwitchFormProps } from './switchForm.types';

export function SwitchForm<
  TFieldValues extends FieldValues,
  TName extends FieldPathByValue<TFieldValues, boolean>,
>({
  control,
  name,
  required,
  requiredMessage,
  rules,
  label,
  ...props
}: SwitchFormProps<TFieldValues, TName>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={getFormFieldRules({ control, name, required, requiredMessage, rules })}
      render={({ field, fieldState }) => (
        <FormControl required={required} error={Boolean(fieldState.error)} sx={styles.control}>
          <FormControlLabel
            label={label}
            labelPlacement="start"
            control={
              <Switch
                {...props}
                checked={field.value}
                onChange={({ checked }) => field.onChange(checked)}
              />
            }
          />
          {fieldState.error?.message && <FormHelperText>{fieldState.error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
}
