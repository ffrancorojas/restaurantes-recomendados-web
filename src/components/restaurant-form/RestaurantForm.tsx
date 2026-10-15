import { PRICE_RANGES } from '@contracts';
import { Button } from '@components/ui/buttons';
import { ConfirmDialog } from '@components/ui/feedback/confirm-dialog';
import {
  RecommendedByFieldForm,
  RestaurantFormHeader,
} from '@components/restaurant-form/components';
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
import './restaurantForm.styles.scss';
import type { RestaurantFormProps } from './restaurantForm.types';

export function RestaurantForm({ error, initial, onSave }: RestaurantFormProps) {
  const {
    control,
    data,
    recommenderOptions,
    saving,
    showLeaveConfirmation,
    requestCancel,
    cancelLeave,
    confirmLeave,
    submit,
  } = useRestaurantForm({ initial, onSave });
  const isEditing = Boolean(initial.id);

  return (
    <div className="background-app width-full restaurant-form-page">
      <form className="background-transparent margin-none padding-form padding-form-mobile width-full restaurant-form-pageForm" onSubmit={submit}>
        {error && <p className="background-danger-subtle text-danger radius-md font-size-sm restaurant-form-error">{error}</p>}
        <RestaurantFormHeader isEditing={isEditing} onBack={requestCancel} />
        <div className="flex-column gap-large">
          <TextFieldForm
            control={control}
            name="name"
            label="Nombre"
            required
            requiredMessage="El nombre es obligatorio."
          />
          <div className="flex align-items-start gap-medium restaurant-form-localityRow">
            <TextFieldForm
              control={control}
              name="locality"
              label="Localidad"
              required
              requiredMessage="La localidad es obligatoria."
            />
            <RestaurantLinkActions name={data.name} locality={data.locality} />
          </div>
          <div className="flex align-items-start gap-medium restaurant-form-recommended-price-row">
            <RecommendedByFieldForm
              control={control}
              label="Recomendado por"
              options={recommenderOptions}
            />
            <SelectFieldForm
              control={control}
              name="price"
              label="Precio"
              options={[{ value: '', label: 'Sin indicar' }, ...PRICE_RANGES]}
              containerClassName="restaurant-form-price-select"
            />
          </div>
          <TextFieldForm control={control} name="dishes" label="Platos recomendados" />
          <TextAreaForm control={control} name="notes" label="Observaciones" />
          <label className="flex-column gap-small text-muted font-semibold font-size-sm">
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
        </div>
        <div className="flex justify-content-flex-end gap-medium padding-top-medium">
          <Button.Text
            leftText="Cancelar"
            variant="secondary"
            type="button"
            onClick={requestCancel}
          />
          <Button.Text leftText={saving ? 'Guardando…' : 'Guardar'} disabled={saving} />
        </div>
      </form>
      <ConfirmDialog
        open={showLeaveConfirmation}
        title="¿Salir sin guardar?"
        message="Si continúas se perderán los datos introducidos en el formulario."
        onCancel={cancelLeave}
        onConfirm={confirmLeave}
      />
    </div>
  );
}
