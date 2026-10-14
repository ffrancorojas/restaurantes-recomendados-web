import { Controller } from 'react-hook-form';
import { PRICE_RANGES } from '@contracts';
import { Button } from '@components/ui/actions/buttons';
import { ConfirmDialog } from '@components/ui/feedback/confirm-dialog';
import { RatingSelector, RestaurantFormHeader } from '@components/restaurant-form/components';
import { RestaurantLinkActions } from '@components/features/restaurant-link-actions';
import { SelectField } from '@components/ui/controls/select-field';
import { TextArea } from '@components/ui/controls/text-area';
import { TextField } from '@components/ui/controls/text-field';
import { TypeSelector } from '@components/ui/controls/type-selector';
import { useRestaurantForm } from '@components/restaurant-form/useRestaurantForm';
import { styles } from './restaurantForm.styles';
import type { RestaurantFormProps } from './restaurantForm.types';

export function RestaurantForm({ error, initial, onSave }: RestaurantFormProps) {
  const {
    control,
    data,
    saving,
    showLeaveConfirmation,
    requestCancel,
    cancelLeave,
    confirmLeave,
    submit,
  } = useRestaurantForm({ initial, onSave });
  const isEditing = Boolean(initial.id);

  return (
    <div data-responsive-form style={styles.page}>
      <form style={styles.pageForm} onSubmit={submit}>
        {error && <p style={styles.error}>{error}</p>}
        <RestaurantFormHeader isEditing={isEditing} onBack={requestCancel} />
        <Controller
          name="name"
          control={control}
          rules={{ required: 'El nombre es obligatorio.' }}
          render={({ field, fieldState }) => (
            <TextField
              label="Nombre"
              required
              error={fieldState.error?.message}
              value={field.value}
              onChange={({ value }) => field.onChange(value)}
              onBlur={field.onBlur}
              name={field.name}
            />
          )}
        />
        <div style={styles.localityRow}>
          <Controller
            name="locality"
            control={control}
            rules={{ required: 'La localidad es obligatoria.' }}
            render={({ field, fieldState }) => (
              <TextField
                label="Localidad"
                required
                error={fieldState.error?.message}
                value={field.value}
                onChange={({ value }) => field.onChange(value)}
                onBlur={field.onBlur}
                name={field.name}
              />
            )}
          />
          <RestaurantLinkActions name={data.name} locality={data.locality} />
        </div>
        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <SelectField
              label="Precio"
              value={field.value}
              options={[{ value: '', label: 'Sin indicar' }, ...PRICE_RANGES]}
              onChange={({ value }) => field.onChange(value)}
            />
          )}
        />
        <Controller
          name="dishes"
          control={control}
          render={({ field }) => (
            <TextField
              label="Platos recomendados"
              value={field.value}
              onChange={({ value }) => field.onChange(value)}
              onBlur={field.onBlur}
              name={field.name}
            />
          )}
        />
        <Controller
          name="recommendedBy"
          control={control}
          render={({ field }) => (
            <TextField
              label="Recomendado por"
              value={field.value}
              onChange={({ value }) => field.onChange(value)}
              onBlur={field.onBlur}
              name={field.name}
            />
          )}
        />
        <Controller
          name="notes"
          control={control}
          render={({ field }) => (
            <TextArea
              label="Observaciones"
              value={field.value}
              onChange={({ value }) => field.onChange(value)}
              onBlur={field.onBlur}
              name={field.name}
            />
          )}
        />
        <label style={styles.label}>
          Tipos de cocina
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <TypeSelector value={field.value} onChange={({ value }) => field.onChange(value)} />
            )}
          />
        </label>
        <Controller
          name="visited"
          control={control}
          render={({ field }) => (
            <Button.Text
              leftText={field.value ? 'Quitar visita' : 'Registrar visita'}
              variant="secondary"
              type="button"
              onClick={() => field.onChange(!field.value)}
            />
          )}
        />
        {data.visited && (
          <>
            <Controller
              name="opinion"
              control={control}
              render={({ field }) => (
                <TextArea
                  label="Mi opinión"
                  value={field.value}
                  onChange={({ value }) => field.onChange(value)}
                  onBlur={field.onBlur}
                  name={field.name}
                />
              )}
            />
            <Controller
              name="rating"
              control={control}
              render={({ field }) => (
                <RatingSelector
                  value={field.value}
                  onChange={({ value }) => field.onChange(value)}
                />
              )}
            />
          </>
        )}
        <div style={styles.actions}>
          <Button.Text
            leftText="Cancelar"
            variant="secondary"
            type="button"
            onClick={requestCancel}
          />
          <Button.Text leftText={saving ? 'Guardando…' : 'Guardar'} disabled={saving} />
        </div>
      </form>
      {showLeaveConfirmation && (
        <ConfirmDialog
          title="¿Salir sin guardar?"
          message="Si continúas se perderán los datos introducidos en el formulario."
          onCancel={cancelLeave}
          onConfirm={confirmLeave}
        />
      )}
    </div>
  );
}
