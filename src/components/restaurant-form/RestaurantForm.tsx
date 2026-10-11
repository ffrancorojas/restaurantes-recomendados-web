import { PRICE_RANGES } from '@contracts';
import { Checkbox } from '@components/checkbox';
import { IconButton, TextButton } from '@components/buttons';
import { SelectField } from '@components/select-field';
import { TextArea } from '@components/text-area';
import { TextField } from '@components/text-field';
import { TypeSelector } from '@components/type-selector';
import { RatingSelector } from '@components/restaurant-form/components';
import { RestaurantLinkActions } from '@components/restaurant-link-actions';
import { useRestaurantForm } from '@components/restaurant-form/useRestaurantForm';
import { styles } from './restaurantForm.styles';
import type { RestaurantFormProps } from './restaurantForm.types';

export function RestaurantForm({
  error,
  initial,
  variant = 'modal',
  onCancel,
  onSave,
}: RestaurantFormProps) {
  const { data, saving, setField, submit } = useRestaurantForm({
    initial,
    onSave: ({ data: formData }) =>
      onSave({ data: formData, id: initial === 'new' ? undefined : initial.id }),
  });
  return (
    <div style={variant === 'page' ? styles.page : styles.backdrop}>
      <form style={variant === 'page' ? styles.pageForm : styles.form} onSubmit={submit}>
        {error && <p style={styles.error}>{error}</p>}
        <div style={styles.title}>
          <div>
            <p style={styles.eyebrow}>NUEVA HISTORIA</p>
            <h2 style={styles.heading}>
              {initial === 'new' ? 'Añadir restaurante' : 'Editar restaurante'}
            </h2>
          </div>
          <IconButton iconName="close" name="Cerrar" onClick={onCancel} />
        </div>
        <div style={styles.nameRow}>
          <TextField
            label="Nombre"
            required
            value={data.name}
            onChange={({ value }) => setField({ key: 'name', value })}
          />
          <RestaurantLinkActions name={data.name} locality={data.locality} compact />
        </div>
        <div style={styles.two}>
          <TextField
            label="Localidad"
            value={data.locality}
            onChange={({ value }) => setField({ key: 'locality', value })}
          />
          <SelectField
            label="Precio"
            value={data.price}
            options={[{ value: '', label: 'Sin indicar' }, ...PRICE_RANGES]}
            onChange={({ value }) => setField({ key: 'price', value: value as typeof data.price })}
          />
        </div>
        <TextField
          label="Platos o especialidad"
          value={data.dishes}
          onChange={({ value }) => setField({ key: 'dishes', value })}
        />
        <label style={styles.label}>
          Tipos de cocina
          <TypeSelector
            value={data.type}
            onChange={({ value }) => setField({ key: 'type', value })}
          />
        </label>
        <Checkbox
          label="Ya he estado"
          checked={data.visited}
          onChange={({ checked }) => setField({ key: 'visited', value: checked })}
        />
        {data.visited && (
          <>
            <TextArea
              label="Mi opinión"
              value={data.opinion}
              onChange={({ value }) => setField({ key: 'opinion', value })}
            />
            <RatingSelector
              value={data.rating}
              onChange={({ value }) => setField({ key: 'rating', value })}
            />
          </>
        )}
        <div style={styles.actions}>
          <TextButton text="Cancelar" variant="secondary" type="button" onClick={onCancel} />
          <TextButton text={saving ? 'Guardando…' : 'Guardar'} disabled={saving} />
        </div>
      </form>
    </div>
  );
}
