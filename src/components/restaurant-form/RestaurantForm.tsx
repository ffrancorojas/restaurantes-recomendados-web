import { PRICE_RANGES } from '@contracts';
import { Checkbox } from '@components/checkbox';
import { IconButton } from '@components/icon-button';
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
  initial,
  variant = 'modal',
  onCancel,
  onSave,
}: RestaurantFormProps) {
  const { data, saving, setField, submit } = useRestaurantForm({ initial, onSave });
  return (
    <div style={variant === 'page' ? styles.page : styles.backdrop}>
      <form style={variant === 'page' ? styles.pageForm : styles.form} onSubmit={submit}>
        <div style={styles.title}>
          <div>
            <p style={styles.eyebrow}>NUEVA HISTORIA</p>
            <h2 style={styles.heading}>
              {initial === 'new' ? 'Añadir restaurante' : 'Editar restaurante'}
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'start', gap: 12 }}>
            <RestaurantLinkActions name={data.name} locality={data.locality} />
            <IconButton icon="close" label="Cerrar" onClick={onCancel} />
          </div>
        </div>
        <TextField
          label="Nombre"
          required
          value={data.name}
          onChange={({ value }) => setField({ key: 'name', value })}
        />
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
          <button type="button" style={styles.secondary} onClick={onCancel}>
            Cancelar
          </button>
          <button style={styles.primary} disabled={saving}>
            {saving ? 'Guardando…' : 'Guardar'}
          </button>
        </div>
      </form>
    </div>
  );
}
