import { Controller, type FieldPathByValue, type FieldValues } from 'react-hook-form';
import { Button } from '@components/ui/buttons';
import { styles } from './visitStatusButtonForm.styles';
import type { VisitStatusButtonFormProps } from './visitStatusButtonForm.types';

export function VisitStatusButtonForm<
  TFieldValues extends FieldValues,
  TName extends FieldPathByValue<TFieldValues, boolean>,
>({
  control,
  name,
  markVisitedText = 'Registrar visita',
  removeVisitText = 'Quitar visita',
}: VisitStatusButtonFormProps<TFieldValues, TName>) {
  return (
    <div style={styles.root}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Button.Text
            leftText={field.value ? removeVisitText : markVisitedText}
            variant="secondary"
            type="button"
            onClick={() => field.onChange(!field.value)}
          />
        )}
      />
    </div>
  );
}
