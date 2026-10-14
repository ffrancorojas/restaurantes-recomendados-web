import classNames from 'classnames';
import { FormControl, FormHelperText, InputLabel } from '@mui/material';
import { Controller, type FieldPathByValue, type FieldValues } from 'react-hook-form';
import { SelectField } from '../../standalone/select-field';
import { getFormFieldRules } from '../formField.tools';
import type { SelectFieldFormProps } from './selectFieldForm.types';

export function SelectFieldForm<
  TFieldValues extends FieldValues,
  TName extends FieldPathByValue<TFieldValues, string>,
>({
  control,
  name,
  required,
  requiredMessage,
  rules,
  containerClassName,
  ...props
}: SelectFieldFormProps<TFieldValues, TName>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={getFormFieldRules({ control, name, required, requiredMessage, rules })}
      render={({ field, fieldState }) => (
        <FormControl
          required={required}
          error={Boolean(fieldState.error)}
          size="small"
          className={classNames('width-full', containerClassName)}
        >
          <InputLabel className="select-field-label text-muted">{props.label}</InputLabel>
          <SelectField
            {...props}
            value={field.value}
            onChange={({ value }) => field.onChange(value)}
          />
          {fieldState.error?.message && <FormHelperText>{fieldState.error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
}
