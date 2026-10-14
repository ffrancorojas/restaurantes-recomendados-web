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
    locality,
    price,
    types,
    onlyVisited,
    filtersOpen,
    availableTypes,
    setQuery,
    setLocality,
    setPrice,
    setTypes,
    setOnlyVisited,
    setFiltersOpen,
    removeRestaurant,
  } = useRestaurantListScreen();

  return (
    <main data-responsive-screen data-responsive-list style={styles.screen}>
      <RestaurantListHeader
        onBack={() => navigate('/')}
        onCreate={() => navigate('/restaurants/new')}
        showFilters={!loading && restaurants.length > 0}
        filtersOpen={filtersOpen}
        onToggleFilters={() => setFiltersOpen((current) => !current)}
      />
      {!loading && restaurants.length > 0 && (
        <>
          {filtersOpen && (
            <Filters
              query={query}
              locality={locality}
              price={price}
              types={types}
              availableTypes={availableTypes}
              onlyVisited={onlyVisited}
              onQueryChange={({ value }) => setQuery(value)}
              onLocalityChange={({ value }) => setLocality(value)}
              onPriceChange={({ value }) => setPrice(value as typeof price)}
              onTypesChange={({ value }) => setTypes(value)}
              onVisitedChange={({ checked }) => setOnlyVisited(checked)}
            />
          )}
        </>
      )}
      {error && <p style={styles.error}>{error}</p>}
      <RestaurantListContent
        loading={loading}
        totalRestaurants={restaurants.length}
        restaurants={filtered}
        onEdit={(restaurant) => navigate(`/restaurants/${restaurant.id}/edit`)}
        onRemove={removeRestaurant}
        onShare={(restaurant) => shareRestaurant({ data: restaurant })}
        onVisit={(restaurant) => navigate(`/restaurants/${restaurant.id}/visit`)}
      />
    </main>
  );
}
