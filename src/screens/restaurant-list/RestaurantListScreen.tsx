import {
  Filters,
  RestaurantListContent,
  RestaurantListHeader,
} from '@screens/restaurant-list/components';
import { useRestaurantListScreen } from '@screens/restaurant-list/useRestaurantListScreen';
import { styles } from '@screens/restaurant-list/restaurantListScreen.styles';
import { useNavigate } from 'react-router-dom';
import { shareRestaurant } from '@tools';

export function RestaurantListScreen() {
  const navigate = useNavigate();
  const {
    restaurants,
    loading,
    error,
    filtered,
    query,
    onlyVisited,
    setQuery,
    setOnlyVisited,
    removeRestaurant,
  } = useRestaurantListScreen();

  return (
    <main data-responsive-screen style={styles.screen}>
      <RestaurantListHeader
        restaurantCount={restaurants.length}
        onCreate={() => navigate('/restaurants/new')}
      />
      {!loading && restaurants.length && (
        <Filters
          query={query}
          onlyVisited={onlyVisited}
          onQueryChange={({ value }) => setQuery(value)}
          onVisitedChange={({ checked }) => setOnlyVisited(checked)}
        />
      )}
      {error && <p style={styles.error}>{error}</p>}
      <RestaurantListContent
        loading={loading}
        totalRestaurants={restaurants.length}
        restaurants={filtered}
        onEdit={(restaurant) => navigate(`/restaurants/${restaurant.id}/edit`)}
        onRemove={removeRestaurant}
        onShare={(restaurant) => shareRestaurant({ data: restaurant })}
      />
    </main>
  );
}
