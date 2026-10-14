import { RestaurantForm } from '@components/restaurant-form';
import { Spinner } from '@components/ui/feedback/spinner';
import { useRestaurantEditScreen } from './useRestaurantEditScreen';

export function RestaurantEditScreen() {
  const { restaurant, loading, error, onSave } = useRestaurantEditScreen();

  if (loading) {
    return (
      <main className="padding-screen-mobile">
        <Spinner label="Cargando restaurante…" />
      </main>
    );
  }

  if (!restaurant) {
    return <main className="padding-screen-mobile">{error || 'Restaurante no encontrado.'}</main>;
  }

  return <RestaurantForm error={error} initial={restaurant} onSave={onSave} />;
}
