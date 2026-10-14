import { Controller, type FieldPathByValue, type FieldValues } from 'react-hook-form';
import { TextField } from '../../standalone/text-field';
import { getFormFieldRules } from '../formField.tools';
import type { TextFieldFormProps } from './textFieldForm.types';

export function TextFieldForm<
  TFieldValues extends FieldValues,
  TName extends FieldPathByValue<TFieldValues, string>,
>({
  control,
  name,
  required,
  requiredMessage,
  rules,
  ...props
}: TextFieldFormProps<TFieldValues, TName>) {
  return (
    <div className="min-width-zero width-full">
      <Controller
        control={control}
        name={name}
        rules={getFormFieldRules({ control, name, required, requiredMessage, rules })}
        render={({ field, fieldState }) => (
          <TextField
            {...props}
            name={field.name}
            required={required}
            value={field.value}
            onChange={({ value }) => field.onChange(value)}
            onBlur={field.onBlur}
            error={fieldState.error?.message}
          />
        )}
      />
    </div>
  );
}
