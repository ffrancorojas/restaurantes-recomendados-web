import { Autocomplete, TextField as MuiTextField } from '@mui/material';
import classNames from 'classnames';
import type { FocusEvent } from 'react';
import { Controller } from 'react-hook-form';
import '@components/ui/controls/standalone/text-field/textField.styles.scss';
import type { RecommendedByFieldFormProps } from './recommendedByField.types';

export function RecommendedByFieldForm({
  className,
  control,
  label,
  options,
}: RecommendedByFieldFormProps) {
  return (
    <div className="min-width-zero width-full">
      <Controller
        control={control}
        name="recommendedBy"
        render={({ field, fieldState }) => (
          <Autocomplete<string, false, false, true>
            freeSolo
            options={options}
            value={field.value}
            inputValue={field.value}
            clearOnBlur={false}
            noOptionsText="Sin coincidencias. Puedes escribir un nombre nuevo."
            onChange={(_, value) => field.onChange(value ?? '')}
            onInputChange={(_, value, reason) => {
              if (reason === 'input' || reason === 'clear') field.onChange(value);
            }}
            renderInput={(params) => (
              <MuiTextField
                {...params}
                name={field.name}
                label={label}
                error={Boolean(fieldState.error)}
                helperText={fieldState.error?.message}
                fullWidth
                size="small"
                variant="outlined"
                className={classNames(
                  'margin-bottom-regular',
                  'width-full',
                  'text-field-root',
                  className,
                )}
                slotProps={{
                  ...params.slotProps,
                  htmlInput: {
                    ...params.slotProps.htmlInput,
                    name: field.name,
                    onBlur: (event: FocusEvent<HTMLInputElement>) => {
                      params.slotProps.htmlInput.onBlur?.(event);
                      field.onBlur();
                    },
                  },
                }}
              />
            )}
          />
        )}
      />
    </div>
  );
}
