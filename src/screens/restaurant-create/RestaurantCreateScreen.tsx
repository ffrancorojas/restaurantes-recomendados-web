import { RestaurantForm } from '@components/restaurant-form';
import { useRestaurantCreateScreen } from './useRestaurantCreateScreen';

export function RestaurantCreateScreen() {
  const { error, initial, onSave } = useRestaurantCreateScreen();

  return (
    <main data-responsive-screen>
      <RestaurantForm error={error} initial={initial} onSave={onSave} />
    </main>
  );
}
