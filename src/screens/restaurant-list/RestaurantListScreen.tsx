import { RestaurantCard } from '@components/restaurant-card';
import { Button } from '@components/buttons';
import { RestaurantForm } from '@components/restaurant-form';
import { Filters } from '@screens/restaurant-list/components';
import { useRestaurantListScreen } from '@screens/restaurant-list/useRestaurantListScreen';
import { styles } from '@screens/restaurant-list/restaurantListScreen.styles';
import type { RestaurantListScreenProps } from '@screens/restaurant-list/restaurantListScreen.types';

export function RestaurantListScreen(props: RestaurantListScreenProps) {
  const { query, onlyVisited, filtered, setQuery, setOnlyVisited } = useRestaurantListScreen({
    restaurants: props.restaurants,
  });
  return (
    <main data-responsive-screen style={styles.screen}>
      <section data-responsive-hero style={styles.hero}>
        <div>
          <p style={styles.eyebrow}>TU MAPA GASTRONÓMICO</p>
          <h1 style={styles.heading}>Mis restaurantes</h1>
          <p style={styles.muted}>
            {props.restaurants.length} lugares guardados para tu próxima salida.
          </p>
        </div>
        <Button.Text
          text="Nueva entrada"
          iconName="add"
          data-responsive-new
          onClick={props.onCreate}
        />
      </section>
      <Filters
        query={query}
        onlyVisited={onlyVisited}
        onQueryChange={({ value }) => setQuery(value)}
        onVisitedChange={({ checked }) => setOnlyVisited(checked)}
      />
      {props.error && <p style={styles.error}>{props.error}</p>}
      {props.loading ? (
        <div style={styles.empty}>Cargando tus restaurantes…</div>
      ) : filtered.length ? (
        <div data-responsive-grid style={styles.grid}>
          {filtered.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onEdit={() => props.onEdit({ restaurant })}
              onRemove={() => props.onRemove({ id: restaurant.id })}
            />
          ))}
        </div>
      ) : (
        <div style={styles.empty}>
          <span>🍽️</span>
          <h2>Aún no hay coincidencias</h2>
          <p>Añade un restaurante o prueba otra búsqueda.</p>
        </div>
      )}
      {props.editing && (
        <RestaurantForm
          error={props.error}
          initial={props.editing}
          onCancel={props.onCancelEdit}
          onSave={props.onSave}
        />
      )}
    </main>
  );
}
