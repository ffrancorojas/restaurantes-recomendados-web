import { styles } from './restaurantCreateHeader.styles';

export function RestaurantCreateHeader() {
  return (
    <section style={styles.intro}>
      <p className="text-eyebrow" style={styles.eyebrow}>
        NUEVA HISTORIA
      </p>
      <h1 className="text-title" style={styles.heading}>
        Añadir restaurante
      </h1>
      <p className="text-muted" style={styles.description}>
        Guarda un sitio nuevo para tenerlo siempre a mano en tu mapa gastronómico.
      </p>
    </section>
  );
}
