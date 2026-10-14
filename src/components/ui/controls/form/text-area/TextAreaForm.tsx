import { Controller, type FieldPathByValue, type FieldValues } from 'react-hook-form';
import { TextArea } from '../../standalone/text-area';
import { getFormFieldRules } from '../formField.tools';
import type { TextAreaFormProps } from './textAreaForm.types';

export function TextAreaForm<
  TFieldValues extends FieldValues,
  TName extends FieldPathByValue<TFieldValues, string>,
>({
  control,
  name,
  required,
  requiredMessage,
  rules,
  ...props
}: TextAreaFormProps<TFieldValues, TName>) {
  return (
    <div className="width-full">
      <Controller
        control={control}
        name={name}
        rules={getFormFieldRules({ control, name, required, requiredMessage, rules })}
        render={({ field, fieldState }) => (
          <TextArea
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
