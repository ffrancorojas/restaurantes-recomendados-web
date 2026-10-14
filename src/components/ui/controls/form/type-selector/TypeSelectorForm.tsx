import { FormControl, FormHelperText } from '@mui/material';
import { Controller, type FieldPathByValue, type FieldValues } from 'react-hook-form';
import type { RestaurantType } from '@contracts';
import { TypeSelector } from '../../standalone/type-selector';
import { getFormFieldRules } from '../formField.tools';
import { styles } from './typeSelectorForm.styles';
import type { TypeSelectorFormProps } from './typeSelectorForm.types';

export function TypeSelectorForm<
  TFieldValues extends FieldValues,
  TName extends FieldPathByValue<TFieldValues, RestaurantType[]>,
>({ control, name, required, requiredMessage, rules }: TypeSelectorFormProps<TFieldValues, TName>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={getFormFieldRules({ control, name, required, requiredMessage, rules })}
      render={({ field, fieldState }) => (
        <FormControl required={required} error={Boolean(fieldState.error)} sx={styles.control}>
          <TypeSelector value={field.value} onChange={({ value }) => field.onChange(value)} />
          {fieldState.error?.message && <FormHelperText>{fieldState.error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
}
