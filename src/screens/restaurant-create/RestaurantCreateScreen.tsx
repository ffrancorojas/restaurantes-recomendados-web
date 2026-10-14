import { RestaurantForm } from '@components/restaurant-form';
import { useRestaurantCreateScreen } from './useRestaurantCreateScreen';

export function RestaurantCreateScreen() {
  const { error, initial, onSave } = useRestaurantCreateScreen();

  return (
    <main className="padding-none-mobile">
      <RestaurantForm error={error} initial={initial} onSave={onSave} />
    </main>
  );
}
