import { RestaurantForm } from '@components/restaurant-form';
import { useRestaurantCreateScreen } from './useRestaurantCreateScreen';
import { RestaurantCreateHeader } from './components';

export function RestaurantCreateScreen() {
  const { error, initial, onSave } = useRestaurantCreateScreen();

  return (
    <main data-responsive-screen>
      <RestaurantCreateHeader />
      <RestaurantForm error={error} initial={initial} onSave={onSave} />
    </main>
  );
}
