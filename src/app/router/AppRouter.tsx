import { LoginScreen } from '@screens/login';
import { RestaurantCreateScreen } from '@screens/restaurant-create';
import { RestaurantListScreen } from '@screens/restaurant-list';
import type { AppRouterProps } from './router.types';

export function AppRouter({ app }: AppRouterProps) {
  if (!app.session) return <LoginScreen error={app.error} onLogin={app.login} />;

  if (app.view === 'create' && app.editing === 'new') {
    return <RestaurantCreateScreen onCancel={app.cancelEditing} onSave={app.saveRestaurant} />;
  }

  return (
    <RestaurantListScreen
      restaurants={app.restaurants}
      loading={app.loading}
      error={app.error}
      editing={app.editing === 'new' ? null : app.editing}
      onCreate={app.startCreating}
      onEdit={app.startEditing}
      onCancelEdit={app.cancelEditing}
      onSave={app.saveRestaurant}
      onRemove={app.removeRestaurant}
    />
  );
}
