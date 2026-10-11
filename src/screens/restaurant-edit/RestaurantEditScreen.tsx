import { RestaurantForm } from '@components/restaurant-form';
import { Spinner } from '@components/spinner';
import { useRestaurantEditScreen } from './useRestaurantEditScreen';

export function RestaurantEditScreen() {
  const { restaurant, loading, error, onCancel, onSave } = useRestaurantEditScreen();

  if (loading) {
    return (
      <main data-responsive-screen>
        <Spinner label="Cargando restaurante…" />
      </main>
    );
  }

  if (!restaurant) {
    return <main data-responsive-screen>{error || 'Restaurante no encontrado.'}</main>;
  }

  return (
    <RestaurantForm
      error={error}
      initial={restaurant}
      variant="page"
      onCancel={onCancel}
      onSave={onSave}
    />
  );
}
