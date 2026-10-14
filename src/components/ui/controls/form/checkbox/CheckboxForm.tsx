import { FormControl, FormControlLabel, FormHelperText } from '@mui/material';
import { Controller, type FieldPathByValue, type FieldValues } from 'react-hook-form';
import { Checkbox } from '../../standalone/checkbox';
import { getFormFieldRules } from '../formField.types';
import { styles } from './checkboxForm.styles';
import type { CheckboxFormProps } from './checkboxForm.types';

export function CheckboxForm<
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
}: CheckboxFormProps<TFieldValues, TName>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={getFormFieldRules({ control, name, required, requiredMessage, rules })}
      render={({ field, fieldState }) => (
        <FormControl required={required} error={Boolean(fieldState.error)} sx={styles.control}>
          <FormControlLabel
            label={label}
            control={
              <Checkbox
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
