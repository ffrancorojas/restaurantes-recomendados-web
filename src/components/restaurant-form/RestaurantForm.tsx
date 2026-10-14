import { PRICE_RANGES } from '@contracts';
import { Button } from '@components/ui/buttons';
import { ConfirmDialog } from '@components/ui/feedback/confirm-dialog';
import { RestaurantFormHeader } from '@components/restaurant-form/components';
import { RestaurantLinkActions } from '@components/features/restaurant-link-actions';
import {
  SelectFieldForm,
  RatingSelectorForm,
  TextAreaForm,
  TextFieldForm,
  TypeSelectorForm,
  VisitStatusButtonForm,
} from '@components/ui/controls/form';
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
        <TextFieldForm
          control={control}
          name="name"
          label="Nombre"
          required
          requiredMessage="El nombre es obligatorio."
        />
        <div style={styles.localityRow}>
          <TextFieldForm
            control={control}
            name="locality"
            label="Localidad"
            required
            requiredMessage="La localidad es obligatoria."
          />
          <RestaurantLinkActions name={data.name} locality={data.locality} />
        </div>
        <SelectFieldForm
          control={control}
          name="price"
          label="Precio"
          options={[{ value: '', label: 'Sin indicar' }, ...PRICE_RANGES]}
        />
        <TextFieldForm control={control} name="dishes" label="Platos recomendados" />
        <TextFieldForm control={control} name="recommendedBy" label="Recomendado por" />
        <TextAreaForm control={control} name="notes" label="Observaciones" />
        <label style={styles.label}>
          Tipos de cocina
          <TypeSelectorForm control={control} name="type" />
        </label>
        <VisitStatusButtonForm control={control} name="visited" />
        {data.visited && (
          <>
            <TextAreaForm control={control} name="opinion" label="Mi opinión" />
            <RatingSelectorForm control={control} name="rating" />
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
