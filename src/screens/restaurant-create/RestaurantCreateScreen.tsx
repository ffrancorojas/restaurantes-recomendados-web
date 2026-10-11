import { RestaurantForm } from '@components/restaurant-form';
import { styles } from './restaurantCreateScreen.styles';
import type { RestaurantCreateScreenProps } from './restaurantCreateScreen.types';

export function RestaurantCreateScreen({ error, onCancel, onSave }: RestaurantCreateScreenProps) {
  return (
    <main data-responsive-screen>
      <section style={styles.intro}>
        <p style={styles.eyebrow}>NUEVA HISTORIA</p>
        <h1 style={styles.heading}>Añadir restaurante</h1>
        <p style={styles.description}>
          Guarda un sitio nuevo para tenerlo siempre a mano en tu mapa gastronómico.
        </p>
      </section>
      <RestaurantForm
        error={error}
        initial="new"
        variant="page"
        onCancel={onCancel}
        onSave={onSave}
      />
    </main>
  );
}
